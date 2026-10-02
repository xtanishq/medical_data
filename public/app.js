const state = {
  patient: null,
  selectedHourIndex: 23,
  category: 'All',
  trendParameterId: 'heart-rate',
  cameraStream: null,
  scanFrame: null,
};

const elements = {
  lookupView: document.querySelector('#lookup-view'),
  dashboardView: document.querySelector('#dashboard-view'),
  form: document.querySelector('#lookup-form'),
  input: document.querySelector('#patient-id'),
  findButton: document.querySelector('#find-button'),
  error: document.querySelector('#lookup-error'),
  manualTab: document.querySelector('#manual-tab'),
  scanTab: document.querySelector('#scan-tab'),
  manualPanel: document.querySelector('#manual-panel'),
  scanPanel: document.querySelector('#scan-panel'),
  scannerModal: document.querySelector('#scanner-modal'),
  scannerVideo: document.querySelector('#scanner-video'),
  scannerMessage: document.querySelector('#scanner-message'),
  toast: document.querySelector('#toast'),
};

const statusClass = (status) =>
  `status-${status.toLowerCase().replaceAll(' ', '-')}`;

function setLookupTab(tab) {
  const isManual = tab === 'manual';
  elements.manualTab.classList.toggle('is-active', isManual);
  elements.scanTab.classList.toggle('is-active', !isManual);
  elements.manualTab.setAttribute('aria-selected', String(isManual));
  elements.scanTab.setAttribute('aria-selected', String(!isManual));
  elements.manualPanel.hidden = !isManual;
  elements.scanPanel.hidden = isManual;
  if (isManual) requestAnimationFrame(() => elements.input.focus());
}

async function resolvePatient(value) {
  elements.error.textContent = '';
  elements.findButton.disabled = true;
  elements.findButton.querySelector('span').textContent = 'Opening record…';

  try {
    const response = await fetch('/api/patients/resolve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value }),
    });
    const body = await response.json();
    if (!response.ok)
      throw new Error(body.message || 'Unable to open this patient record.');

    state.patient = body;
    state.selectedHourIndex = body.hourlyRecords.length - 1;
    state.category = 'All';
    state.trendParameterId = 'heart-rate';
    renderDashboard();
    elements.lookupView.hidden = true;
    elements.dashboardView.hidden = false;
    history.replaceState(
      {},
      '',
      `?patient=${encodeURIComponent(body.patientId)}`,
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    elements.error.textContent =
      error instanceof Error
        ? error.message
        : 'Unable to open this patient record.';
    elements.input.setAttribute('aria-invalid', 'true');
    elements.input.focus();
  } finally {
    elements.findButton.disabled = false;
    elements.findButton.querySelector('span').textContent =
      'View patient record';
  }
}

function showLookup() {
  elements.dashboardView.hidden = true;
  elements.lookupView.hidden = false;
  history.replaceState({}, '', location.pathname);
  setLookupTab('manual');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDashboard() {
  const patient = state.patient;
  document.querySelector('#dashboard-title').textContent = patient.displayName;
  document.querySelector('#patient-meta').textContent =
    `${patient.patientId} · Bed ${patient.bed} · ${patient.unit} · ${formatDate(patient.recordDate)}`;
  document.querySelector('#last-updated').textContent = formatDateTime(
    patient.lastUpdated,
  );
  renderStatusBadge(
    document.querySelector('#overall-status'),
    patient.overallStatus,
  );

  const isCritical = patient.overallStatus === 'Critical';
  const banner = document.querySelector('#alert-banner');
  banner.className = `alert-banner ${isCritical ? 'critical' : 'normal'}`;
  document.querySelector('#alert-title').textContent = isCritical
    ? 'Critical observations require attention'
    : 'Patient is within recorded targets';
  document.querySelector('#alert-message').textContent = isCritical
    ? 'Review the latest abnormal observations and escalation note below.'
    : 'No critical observations are recorded in the selected 24-hour period.';

  renderTimeline();
  renderCategoryFilters();
  renderHour();
  populateTrendSelect();
  renderTrend();
}

function renderHour() {
  const record = state.patient.hourlyRecords[state.selectedHourIndex];
  document.querySelector('#selected-hour-label').textContent =
    `${record.hour} · ${record.overallStatus}`;
  renderMetricCards(record);
  renderObservations(record);
  document
    .querySelectorAll('.hour-button')
    .forEach((button, index) =>
      button.classList.toggle('is-active', index === state.selectedHourIndex),
    );
}

function renderMetricCards(record) {
  const featured = ['heart-rate', 'blood-pressure', 'spo2', 'temperature'];
  const container = document.querySelector('#metric-grid');
  container.replaceChildren();

  featured.forEach((id) => {
    const item = record.observations.find((entry) => entry.parameterId === id);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `metric-card${state.trendParameterId === id ? ' is-selected' : ''}`;
    button.addEventListener('click', () => {
      state.trendParameterId = id;
      document.querySelector('#trend-select').value = id;
      renderMetricCards(record);
      renderTrend();
      document
        .querySelector('#trends')
        .scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    const label = document.createElement('span');
    label.className = 'metric-label';
    label.textContent = item.label;
    const value = document.createElement('strong');
    value.textContent = conciseValue(item.observedValue);
    const status = document.createElement('span');
    status.className = `metric-status status-text-${item.status.toLowerCase().replaceAll(' ', '-')}`;
    status.textContent = item.status;
    button.append(label, value, status);
    container.append(button);
  });
}

function renderTimeline() {
  const timeline = document.querySelector('#hour-timeline');
  timeline.replaceChildren();
  state.patient.hourlyRecords.forEach((record, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `hour-button ${record.overallStatus.toLowerCase()}${index === state.selectedHourIndex ? ' is-active' : ''}`;
    button.textContent = record.hour;
    button.setAttribute(
      'aria-label',
      `${record.hour}, ${record.overallStatus}`,
    );
    button.addEventListener('click', () => {
      state.selectedHourIndex = index;
      renderHour();
      button.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    });
    timeline.append(button);
  });
  requestAnimationFrame(() =>
    timeline.scrollTo({ left: timeline.scrollWidth, behavior: 'instant' }),
  );
}

function renderCategoryFilters() {
  const categories = [
    'All',
    ...new Set(
      state.patient.hourlyRecords[0].observations.map((item) => item.category),
    ),
  ];
  const container = document.querySelector('#category-filter');
  container.replaceChildren();
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `filter-button${state.category === category ? ' is-active' : ''}`;
    button.textContent = category;
    button.addEventListener('click', () => {
      state.category = category;
      renderCategoryFilters();
      renderObservations(state.patient.hourlyRecords[state.selectedHourIndex]);
    });
    container.append(button);
  });
}

function renderObservations(record) {
  const observations =
    state.category === 'All'
      ? record.observations
      : record.observations.filter((item) => item.category === state.category);
  const container = document.querySelector('#observation-grid');
  container.replaceChildren();

  observations.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'observation-card';
    const title = document.createElement('h3');
    title.textContent = item.label;
    const badge = document.createElement('span');
    badge.className = `status-badge ${statusClass(item.status)}`;
    badge.textContent = item.status;
    const value = document.createElement('p');
    value.className = 'observation-value';
    value.textContent = item.observedValue;
    const range = document.createElement('p');
    range.className = 'normal-range';
    range.textContent = `Reference: ${item.normalRange}`;
    article.append(title, badge, value, range);
    container.append(article);
  });
}

function populateTrendSelect() {
  const select = document.querySelector('#trend-select');
  select.replaceChildren();
  state.patient.hourlyRecords[0].observations
    .filter((item) => item.numericValue !== null)
    .forEach((item) => {
      const option = document.createElement('option');
      option.value = item.parameterId;
      option.textContent = item.label;
      select.append(option);
    });
  select.value = state.trendParameterId;
}

function renderTrend() {
  const records = state.patient.hourlyRecords;
  const items = records.map((record) =>
    record.observations.find(
      (entry) => entry.parameterId === state.trendParameterId,
    ),
  );
  const values = items
    .map((item) => item.numericValue)
    .filter((value) => typeof value === 'number');
  if (!values.length) return;

  const latest = items[state.selectedHourIndex];
  document.querySelector('#trend-title').textContent = latest.label;
  document.querySelector('#trend-current').textContent =
    latest.observedValue.split(';')[0];
  document.querySelector('#trend-range').textContent =
    `Recorded range ${Math.min(...values)}–${Math.max(...values)}${latest.unit ? ` ${latest.unit}` : ''}`;

  const width = 900;
  const height = 190;
  const padding = 12;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = max - min || 1;
  const points = values.map((value, index) => ({
    x: padding + (index / (values.length - 1)) * (width - padding * 2),
    y: padding + ((max - value) / spread) * (height - padding * 2),
  }));
  const line = points
    .map(
      (point, index) =>
        `${index === 0 ? 'M' : 'L'}${point.x.toFixed(1)},${point.y.toFixed(1)}`,
    )
    .join(' ');
  const area = `${line} L${points.at(-1).x.toFixed(1)},${height} L${points[0].x.toFixed(1)},${height} Z`;
  const svg = svgElement('svg', {
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: 'none',
    'aria-hidden': 'true',
  });
  const defs = svgElement('defs');
  const gradient = svgElement('linearGradient', {
    id: 'chart-fill',
    x1: '0',
    x2: '0',
    y1: '0',
    y2: '1',
  });
  gradient.append(
    svgElement('stop', {
      offset: '0%',
      'stop-color': '#0b6e64',
      'stop-opacity': '.18',
    }),
    svgElement('stop', {
      offset: '100%',
      'stop-color': '#0b6e64',
      'stop-opacity': '0',
    }),
  );
  defs.append(gradient);
  svg.append(defs);
  [0.25, 0.5, 0.75].forEach((ratio) =>
    svg.append(
      svgElement('line', {
        x1: '0',
        x2: String(width),
        y1: String(height * ratio),
        y2: String(height * ratio),
        class: 'chart-grid',
      }),
    ),
  );
  svg.append(
    svgElement('path', { d: area, class: 'chart-area' }),
    svgElement('path', { d: line, class: 'chart-line' }),
  );
  const selected = points[state.selectedHourIndex];
  svg.append(
    svgElement('circle', {
      cx: String(selected.x),
      cy: String(selected.y),
      r: '5',
      class: 'chart-dot',
    }),
  );
  const chart = document.querySelector('#trend-chart');
  chart.setAttribute(
    'aria-label',
    `${latest.label} trend from ${min} to ${max}${latest.unit ? ` ${latest.unit}` : ''}`,
  );
  chart.replaceChildren(svg);

  document.querySelectorAll('.metric-card').forEach((card, index) => {
    const ids = ['heart-rate', 'blood-pressure', 'spo2', 'temperature'];
    card.classList.toggle('is-selected', ids[index] === state.trendParameterId);
  });
}

function svgElement(name, attributes = {}) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attributes).forEach(([key, value]) =>
    element.setAttribute(key, value),
  );
  return element;
}

function renderStatusBadge(element, status) {
  element.className = `status-badge ${statusClass(status)}`;
  element.textContent = status;
}

function conciseValue(value) {
  return value.split(';')[0].replace(' despite supplemental oxygen', '');
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`));
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: 'short',
  }).format(new Date(value));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('is-visible');
  window.setTimeout(() => elements.toast.classList.remove('is-visible'), 2800);
}

async function openScanner() {
  elements.scannerModal.hidden = false;
  document.body.style.overflow = 'hidden';
  elements.scannerMessage.textContent = 'Starting camera…';
  try {
    if (!('BarcodeDetector' in window))
      throw new Error(
        'Live QR scanning is not supported in this browser. Use Patient ID instead.',
      );
    state.cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' } },
      audio: false,
    });
    elements.scannerVideo.srcObject = state.cameraStream;
    await elements.scannerVideo.play();
    elements.scannerMessage.textContent =
      'Hold the QR code steady inside the frame.';
    const detector = new window.BarcodeDetector({ formats: ['qr_code'] });
    const scan = async () => {
      try {
        const codes = await detector.detect(elements.scannerVideo);
        if (codes[0]?.rawValue) {
          closeScanner();
          await resolvePatient(codes[0].rawValue);
          return;
        }
      } catch {
        /* keep scanning transient camera frames */
      }
      state.scanFrame = requestAnimationFrame(scan);
    };
    state.scanFrame = requestAnimationFrame(scan);
  } catch (error) {
    elements.scannerMessage.textContent =
      error instanceof Error ? error.message : 'Camera could not be started.';
  }
}

function closeScanner() {
  if (state.scanFrame) cancelAnimationFrame(state.scanFrame);
  state.scanFrame = null;
  state.cameraStream?.getTracks().forEach((track) => track.stop());
  state.cameraStream = null;
  elements.scannerVideo.srcObject = null;
  elements.scannerModal.hidden = true;
  document.body.style.overflow = '';
}

elements.form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = elements.input.value.trim().toUpperCase();
  if (!/^[A-Z]{2}\d{5}$/.test(value)) {
    elements.error.textContent =
      'Enter a valid Patient ID, for example GU70050.';
    elements.input.setAttribute('aria-invalid', 'true');
    elements.input.focus();
    return;
  }
  elements.input.removeAttribute('aria-invalid');
  resolvePatient(value);
});

elements.input.addEventListener('input', () => {
  elements.input.value = elements.input.value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '');
  elements.error.textContent = '';
  elements.input.removeAttribute('aria-invalid');
});
elements.manualTab.addEventListener('click', () => setLookupTab('manual'));
elements.scanTab.addEventListener('click', () => setLookupTab('scan'));
document.querySelector('#open-scanner').addEventListener('click', openScanner);
document
  .querySelector('#close-scanner')
  .addEventListener('click', closeScanner);
elements.scannerModal.addEventListener('click', (event) => {
  if (event.target === elements.scannerModal) closeScanner();
});
document.querySelector('#back-button').addEventListener('click', showLookup);
document.querySelector('#mobile-back').addEventListener('click', showLookup);
document.querySelector('#trend-select').addEventListener('change', (event) => {
  state.trendParameterId = event.target.value;
  renderTrend();
  renderMetricCards(state.patient.hourlyRecords[state.selectedHourIndex]);
});
document.querySelectorAll('[data-demo-id]').forEach((button) =>
  button.addEventListener('click', () => {
    elements.input.value = button.dataset.demoId;
    resolvePatient(button.dataset.demoId);
  }),
);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !elements.scannerModal.hidden) closeScanner();
});
window.addEventListener('offline', () =>
  showToast('You are offline. Live patient lookup is unavailable.'),
);

const queryPatient = new URLSearchParams(location.search).get('patient');
if (queryPatient) resolvePatient(queryPatient);
