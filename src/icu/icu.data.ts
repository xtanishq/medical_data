import {
  ClinicalCategory,
  ClinicalStatus,
  HourlyRecord,
  Observation,
  PatientRecord,
} from './icu.types';
import { IMPORTED_PATIENTS } from './icu.imported';

type ParameterDefinition = {
  id: string;
  label: string;
  category: ClinicalCategory;
  normalRange: string;
  unit: string | null;
};

const parameterDefinitions: ParameterDefinition[] = [
  {
    id: 'heart-rate',
    label: 'Heart Rate & Rhythm',
    category: 'Cardiovascular',
    normalRange: '60–100 bpm; normal sinus rhythm',
    unit: 'bpm',
  },
  {
    id: 'blood-pressure',
    label: 'Blood Pressure & MAP',
    category: 'Cardiovascular',
    normalRange: 'SBP 90–120; DBP 60–80; MAP 70–105 mmHg',
    unit: 'mmHg',
  },
  {
    id: 'cvp',
    label: 'Central Venous Pressure',
    category: 'Cardiovascular',
    normalRange: '2–8 mmHg spontaneous; 8–12 ventilated',
    unit: 'mmHg',
  },
  {
    id: 'capillary-refill',
    label: 'Capillary Refill & Pulses',
    category: 'Cardiovascular',
    normalRange: 'CRT <2 sec; bilateral peripheral pulses 2+',
    unit: null,
  },
  {
    id: 'respiratory-rate',
    label: 'Respiratory Rate & Pattern',
    category: 'Respiratory',
    normalRange: '12–20 breaths/min; unlabored and regular',
    unit: 'breaths/min',
  },
  {
    id: 'spo2',
    label: 'Oxygen Saturation (SpO₂)',
    category: 'Respiratory',
    normalRange: '94–100% general ICU; 88–92% hypercapnic COPD',
    unit: '%',
  },
  {
    id: 'etco2',
    label: 'End-Tidal CO₂ (EtCO₂)',
    category: 'Respiratory',
    normalRange: '35–45 mmHg; normal box waveform',
    unit: 'mmHg',
  },
  {
    id: 'ventilator',
    label: 'Ventilator Parameters',
    category: 'Respiratory',
    normalRange: 'Ppeak <30 cmH₂O; PEEP 5–8 cmH₂O',
    unit: 'cmH₂O',
  },
  {
    id: 'gcs',
    label: 'Glasgow Coma Scale (GCS)',
    category: 'Neurological',
    normalRange: 'GCS 15; fully alert and oriented',
    unit: null,
  },
  {
    id: 'pupils',
    label: 'Pupillary Light Reflex',
    category: 'Neurological',
    normalRange: '2–4 mm; equal, round and briskly reactive',
    unit: 'mm',
  },
  {
    id: 'rass',
    label: 'Sedation Score (RASS)',
    category: 'Neurological',
    normalRange: '0 to −1; alert/calm to slightly drowsy',
    unit: null,
  },
  {
    id: 'urine-output',
    label: 'Hourly Urine Output',
    category: 'Fluids & renal',
    normalRange: '0.5–1.0 mL/kg/hr; about 30–60 mL/hr',
    unit: 'mL/hr',
  },
  {
    id: 'fluid-balance',
    label: 'Fluid Balance (Net I/O)',
    category: 'Fluids & renal',
    normalRange: 'Neutral balance within ±500 mL/24 hr',
    unit: 'mL',
  },
  {
    id: 'glucose',
    label: 'Point-of-Care Blood Glucose',
    category: 'Metabolic',
    normalRange: '140–180 mg/dL ICU target',
    unit: 'mg/dL',
  },
  {
    id: 'temperature',
    label: 'Core Body Temperature',
    category: 'Metabolic',
    normalRange: '36.5–37.5 °C',
    unit: '°C',
  },
  {
    id: 'pain',
    label: 'Pain Score (CPOT / BPS)',
    category: 'Neurological',
    normalRange: 'CPOT 0–1; BPS 3–4',
    unit: null,
  },
  {
    id: 'line-integrity',
    label: 'Line & Dressing Integrity',
    category: 'Lines & safety',
    normalRange: 'Clean, dry, intact dressing; clear trace',
    unit: null,
  },
  {
    id: 'vasoactive',
    label: 'Vasoactive Infusion Titration',
    category: 'Cardiovascular',
    normalRange: 'Stable target MAP; minimal dose adjustment',
    unit: null,
  },
  {
    id: 'neurovascular',
    label: 'Neurovascular Limb Checks',
    category: 'Lines & safety',
    normalRange: 'Warm, pink; motor/sensory intact; palpable pulse',
    unit: null,
  },
  {
    id: 'drain-output',
    label: 'Drain & Tube Output',
    category: 'Lines & safety',
    normalRange: '<50 mL/hr serous output; no active air leak',
    unit: 'mL/hr',
  },
];

function observation(
  id: string,
  observedValue: string,
  numericValue: number | null,
  status: ClinicalStatus,
): Observation {
  const definition = parameterDefinitions.find((item) => item.id === id);

  if (!definition) {
    throw new Error(`Unknown parameter: ${id}`);
  }

  return {
    ...definition,
    parameterId: definition.id,
    observedValue,
    numericValue,
    status,
  };
}

function createNormalHour(index: number): HourlyRecord {
  const hour = `${String(index).padStart(2, '0')}:00`;
  const heartRate = 68 + ((index * 7) % 12);
  const systolic = 101 + ((index * 5) % 17);
  const diastolic = 65 + ((index * 3) % 13);
  const map = Math.round((systolic + 2 * diastolic) / 3);
  const rr = 13 + ((index * 5) % 7);
  const spo2 = 95 + ((index * 3) % 4);
  const etco2 = 36 + ((index * 2) % 8);
  const urine = 36 + ((index * 11) % 25);
  const glucose = 145 + ((index * 13) % 31);
  const temperature = 36.6 + ((index * 3) % 8) / 10;
  const drain = 7 + ((index * 9) % 26);

  return {
    hour,
    overallStatus: 'Normal',
    actionNotes: 'Continue routine monitoring.',
    observations: [
      observation(
        'heart-rate',
        `${heartRate} bpm; normal sinus rhythm`,
        heartRate,
        'Normal',
      ),
      observation(
        'blood-pressure',
        `${systolic}/${diastolic} mmHg; MAP ${map} mmHg`,
        map,
        'Normal',
      ),
      observation(
        'cvp',
        `${3 + ((index * 2) % 5)} mmHg`,
        3 + ((index * 2) % 5),
        'Normal',
      ),
      observation(
        'capillary-refill',
        'CRT <2 sec; bilateral peripheral pulses 2+',
        null,
        'Normal',
      ),
      observation(
        'respiratory-rate',
        `${rr} breaths/min; unlabored, regular`,
        rr,
        'Normal',
      ),
      observation('spo2', `${spo2}%`, spo2, 'Normal'),
      observation('etco2', `${etco2} mmHg; normal waveform`, etco2, 'Normal'),
      observation(
        'ventilator',
        `Ppeak ${18 + ((index * 3) % 10)} cmH₂O; PEEP ${5 + (index % 4)} cmH₂O`,
        null,
        'Normal',
      ),
      observation('gcs', '15; fully alert and oriented', 15, 'Normal'),
      observation(
        'pupils',
        `${2 + (index % 2)} mm; equal, round, briskly reactive`,
        2 + (index % 2),
        'Normal',
      ),
      observation(
        'rass',
        `${index % 3 === 0 ? -1 : 0}; ${index % 3 === 0 ? 'slightly drowsy' : 'alert and calm'}`,
        index % 3 === 0 ? -1 : 0,
        'Normal',
      ),
      observation('urine-output', `${urine} mL/hr`, urine, 'Normal'),
      observation(
        'fluid-balance',
        `${index % 2 === 0 ? '+' : '−'}${5 + ((index * 7) % 20)} mL`,
        index % 2 === 0 ? 5 + ((index * 7) % 20) : -(5 + ((index * 7) % 20)),
        'Normal',
      ),
      observation('glucose', `${glucose} mg/dL`, glucose, 'Normal'),
      observation(
        'temperature',
        `${temperature.toFixed(1)} °C`,
        temperature,
        'Normal',
      ),
      observation(
        'pain',
        `CPOT ${index % 2}; minimal pain expression`,
        index % 2,
        'Normal',
      ),
      observation(
        'line-integrity',
        'Clean, dry, intact; clear trace',
        null,
        'Normal',
      ),
      observation(
        'vasoactive',
        'Stable target MAP; no dose adjustment',
        null,
        'Normal',
      ),
      observation(
        'neurovascular',
        'Warm, pink; motor/sensory intact; distal pulse palpable',
        null,
        'Normal',
      ),
      observation(
        'drain-output',
        `${drain} mL/hr; serous; no active air leak`,
        drain,
        'Normal',
      ),
    ],
  };
}

function createCriticalHour(index: number): HourlyRecord {
  const hour = `${String(index).padStart(2, '0')}:00`;
  const heartRate = 145 - Math.min(index, 12) + ((index * 5) % 9);
  const systolic = 78 + ((index * 3) % 10);
  const diastolic = 46 + ((index * 2) % 9);
  const map = Math.round((systolic + 2 * diastolic) / 3);
  const rr = 30 + ((index * 5) % 7);
  const spo2 = 82 + ((index * 3) % 8);
  const etco2 = 49 + ((index * 5) % 13);
  const urine = 7 + ((index * 3) % 10);
  const glucose = 230 + ((index * 17) % 86);
  const temperature = 38.6 + ((index * 3) % 14) / 10;
  const drain = 122 + ((index * 11) % 51);

  return {
    hour,
    overallStatus: 'Critical',
    actionNotes: 'Immediate clinical assessment and escalation required.',
    observations: [
      observation(
        'heart-rate',
        `${heartRate} bpm; sinus tachycardia`,
        heartRate,
        'Critical',
      ),
      observation(
        'blood-pressure',
        `${systolic}/${diastolic} mmHg; MAP ${map} mmHg`,
        map,
        'Critical',
      ),
      observation(
        'cvp',
        `${10 + ((index * 2) % 5)} mmHg`,
        10 + ((index * 2) % 5),
        'Review',
      ),
      observation(
        'capillary-refill',
        'CRT 4–5 sec; peripheral pulses weak, 1+',
        null,
        'Critical',
      ),
      observation(
        'respiratory-rate',
        `${rr} breaths/min; labored, irregular`,
        rr,
        'Critical',
      ),
      observation(
        'spo2',
        `${spo2}% despite supplemental oxygen`,
        spo2,
        'Critical',
      ),
      observation(
        'etco2',
        `${etco2} mmHg; abnormal waveform`,
        etco2,
        'Critical',
      ),
      observation(
        'ventilator',
        `Ppeak ${31 + ((index * 3) % 8)} cmH₂O; PEEP ${10 + (index % 4)} cmH₂O`,
        null,
        'Critical',
      ),
      observation(
        'gcs',
        `${8 + (index % 4)}; altered response`,
        8 + (index % 4),
        'Critical',
      ),
      observation(
        'pupils',
        `${5 + (index % 2)} mm; sluggish bilateral reaction`,
        5 + (index % 2),
        'Review',
      ),
      observation(
        'rass',
        `${index % 2 === 0 ? -4 : -3}; deep to moderate sedation`,
        index % 2 === 0 ? -4 : -3,
        'Review',
      ),
      observation(
        'urine-output',
        `${urine} mL/hr; oliguric`,
        urine,
        'Critical',
      ),
      observation(
        'fluid-balance',
        `+${190 + ((index * 23) % 210)} mL`,
        190 + ((index * 23) % 210),
        'Review',
      ),
      observation('glucose', `${glucose} mg/dL`, glucose, 'Critical'),
      observation(
        'temperature',
        `${temperature.toFixed(1)} °C`,
        temperature,
        'Critical',
      ),
      observation(
        'pain',
        `CPOT ${5 + (index % 2)}; marked pain indicators`,
        5 + (index % 2),
        'Critical',
      ),
      observation(
        'line-integrity',
        'Dressing damp/soiled; insertion site requires review',
        null,
        'Review',
      ),
      observation(
        'vasoactive',
        'Norepinephrine increased; MAP remains below target',
        null,
        'Critical',
      ),
      observation(
        'neurovascular',
        'Cool extremity; delayed refill; distal pulse weak',
        null,
        'Review',
      ),
      observation(
        'drain-output',
        `${drain} mL/hr; bloody/turbid; urgent review`,
        drain,
        'Critical',
      ),
    ],
  };
}

const LEGACY_PATIENTS: PatientRecord[] = [
  {
    patientId: 'GU70050',
    displayName: 'Gaurav Kumar',
    bed: '201',
    unit: 'Medical ICU',
    recordDate: '2026-09-30',
    lastUpdated: '2026-09-30T23:00:00+05:30',
    overallStatus: 'Normal',
    hourlyRecords: Array.from({ length: 24 }, (_, index) =>
      createNormalHour(index),
    ),
  },
  {
    patientId: 'GU70049',
    displayName: 'Shachi',
    photoUrl: '/patients/sachi.jpeg',
    bed: '204',
    unit: 'Critical Care ICU',
    recordDate: '2026-09-30',
    lastUpdated: '2026-09-30T23:00:00+05:30',
    overallStatus: 'Critical',
    hourlyRecords: Array.from({ length: 24 }, (_, index) =>
      createCriticalHour(index),
    ),
  },
];

export const ICU_PATIENTS: PatientRecord[] = [
  ...IMPORTED_PATIENTS,
  ...LEGACY_PATIENTS.filter(
    (patient) =>
      !IMPORTED_PATIENTS.some(
        (imported) => imported.patientId === patient.patientId,
      ),
  ),
];
