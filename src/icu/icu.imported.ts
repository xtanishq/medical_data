// Generated from supplied patient workbooks by scripts/import-patient-data.py.
import type { PatientRecord } from './icu.types';

export const IMPORTED_PATIENTS: PatientRecord[] = [
  {
    "patientId": "GU70050",
    "displayName": "Gaurav kumar",
    "bed": "201",
    "unit": "ICU",
    "recordDate": "2026-09-30",
    "lastUpdated": "2026-09-30T23:00:00+05:30",
    "photoUrl": "/patients/gaurav.jpeg",
    "overallStatus": "Normal",
    "hourlyRecords": [
      {
        "hour": "00:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "71 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 71.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/73 mmHg; MAP 84 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "56 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 56.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-17 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -17.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "147 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 147.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "17 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 17.0
          }
        ]
      },
      {
        "hour": "01:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "70 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 70.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/68 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "15 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "42 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "60 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 60.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+10 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 10.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "160 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 160.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "19 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 19.0
          }
        ]
      },
      {
        "hour": "02:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "69 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 69.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "106/74 mmHg; MAP 85 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 85.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "43 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "56 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 56.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+6 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "169 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 169.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "27 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 27.0
          }
        ]
      },
      {
        "hour": "03:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "69 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 69.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "115/78 mmHg; MAP 90 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 90.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "13 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 13.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "43 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 18 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "39 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+5 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "162 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 162.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.0 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "7 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 7.0
          }
        ]
      },
      {
        "hour": "04:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "70 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 70.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "101/68 mmHg; MAP 79 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 79.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "39 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "53 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 53.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+24 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 24.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "150 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 150.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "31 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 31.0
          }
        ]
      },
      {
        "hour": "05:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "84 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "109/77 mmHg; MAP 88 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 88.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "15 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "49 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 49.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-22 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -22.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "22 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 22.0
          }
        ]
      },
      {
        "hour": "06:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "65 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 65.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "111/74 mmHg; MAP 86 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 86.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "39 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 20 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "42 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-14 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -14.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "157 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 157.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.0 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "24 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 24.0
          }
        ]
      },
      {
        "hour": "07:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "84 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "112/68 mmHg; MAP 83 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 83.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 19 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "59 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 59.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-14 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -14.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "156 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 156.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "22 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 22.0
          }
        ]
      },
      {
        "hour": "08:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "93 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 93.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/74 mmHg; MAP 84 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "39 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "36 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 36.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+15 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "158 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 158.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "32 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 32.0
          }
        ]
      },
      {
        "hour": "09:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "86 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 86.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "110/66 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-7 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -7.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "170 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 170.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.7 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "15 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 15.0
          }
        ]
      },
      {
        "hour": "10:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "64 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 64.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "118/72 mmHg; MAP 87 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 87.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "46 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 46.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+11 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 11.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "153 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 153.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "13 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 13.0
          }
        ]
      },
      {
        "hour": "11:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "82 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 82.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "100/62 mmHg; MAP 75 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 75.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "99%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 99.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 19 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "49 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 49.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-12 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -12.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "155 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 155.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "25 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 25.0
          }
        ]
      },
      {
        "hour": "12:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "67 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 67.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "116/66 mmHg; MAP 83 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 83.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "39 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+22 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 22.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "162 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 162.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "33 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 33.0
          }
        ]
      },
      {
        "hour": "13:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "90 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 90.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "117/62 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "96%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 96.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 22 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "49 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 49.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+14 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "156 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 156.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "8 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 8.0
          }
        ]
      },
      {
        "hour": "14:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "83 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 83.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "95/67 mmHg; MAP 76 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 76.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "16 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 16.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "39 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "42 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+27 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 27.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "148 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 148.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "20 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 20.0
          }
        ]
      },
      {
        "hour": "15:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "90 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 90.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "96/66 mmHg; MAP 76 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 76.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "13 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 13.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-3 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -3.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "176 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 176.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "25 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 25.0
          }
        ]
      },
      {
        "hour": "16:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "87 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 87.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "97/65 mmHg; MAP 76 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 76.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "15 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "57 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 57.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-20 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -20.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "162 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 162.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "20 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 20.0
          }
        ]
      },
      {
        "hour": "17:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "67 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 67.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "95/68 mmHg; MAP 77 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 77.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "99%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 99.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "43 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 20 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-16 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -16.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "22 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 22.0
          }
        ]
      },
      {
        "hour": "18:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "94 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 94.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "117/65 mmHg; MAP 82 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 82.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "96%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 96.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+18 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "13 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 13.0
          }
        ]
      },
      {
        "hour": "19:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "68 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 68.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "96/74 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "46 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 46.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+9 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 9.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "167 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 167.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "6 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 6.0
          }
        ]
      },
      {
        "hour": "20:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "84 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/64 mmHg; MAP 78 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 78.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 22 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "48 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 48.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-24 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -24.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "156 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 156.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "30 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 30.0
          }
        ]
      },
      {
        "hour": "21:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "93 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 93.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "109/67 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "52 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 52.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-1 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "167 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 167.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.7 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "20 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 20.0
          }
        ]
      },
      {
        "hour": "22:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "88 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 88.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "103/69 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "42 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "36 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 36.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-22 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -22.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "152 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 152.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "12 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 12.0
          }
        ]
      },
      {
        "hour": "23:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "75 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 75.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/66 mmHg; MAP 79 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 79.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "13 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 13.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "51 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 51.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+23 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 23.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.8 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "15 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 15.0
          }
        ]
      }
    ]
  },
  {
    "patientId": "GU70212",
    "displayName": "Jatin",
    "bed": "203",
    "unit": "ICU",
    "recordDate": "2026-09-30",
    "lastUpdated": "2026-09-30T23:00:00+05:30",
    "photoUrl": "/patients/jatin.jpeg",
    "overallStatus": "Average",
    "hourlyRecords": [
      {
        "hour": "00:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "92 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 92.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/65 mmHg; MAP 78 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 78.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "24 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 24.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "44 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 44.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 30 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "25 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 25.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+65 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 65.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "195 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 195.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.5 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.5
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "69 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 69.0
          }
        ]
      },
      {
        "hour": "01:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "103 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 103.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "121/66 mmHg; MAP 84 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 84.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "22 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 22.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "42 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 42.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "33 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 33.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+3 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 3.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "200 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 200.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.9 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.9
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "58 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 58.0
          }
        ]
      },
      {
        "hour": "02:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "88 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 88.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "116/66 mmHg; MAP 83 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 83.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "23 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 23.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "94% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "44 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 44.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 9 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Average",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "37 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 37.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+64 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 64.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "153 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 153.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "38.0 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 38.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "45 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 45.0
          }
        ]
      },
      {
        "hour": "03:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "98 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 98.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "110/68 mmHg; MAP 82 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 82.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "9 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 9.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "96% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 96.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "41 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 41.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 30 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Average",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "25 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 25.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+98 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 98.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "163 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 163.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "32 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 32.0
          }
        ]
      },
      {
        "hour": "04:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "107 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 107.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "128/78 mmHg; MAP 95 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "8 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 8.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "22 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 22.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "96% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 96.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "43 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 30 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "30 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 30.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-18 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": -18.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "176 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 176.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "42 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 42.0
          }
        ]
      },
      {
        "hour": "05:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "87 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 87.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "118/72 mmHg; MAP 87 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 87.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "8 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 8.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "24 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 24.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "41 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 41.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "30 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 30.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+68 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 68.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "145 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 145.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.9 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.9
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "42 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 42.0
          }
        ]
      },
      {
        "hour": "06:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "102 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 102.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "106/72 mmHg; MAP 83 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 83.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "23 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 23.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "94% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "43 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "35 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 35.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-2 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": -2.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "146 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 146.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.8 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "51 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 51.0
          }
        ]
      },
      {
        "hour": "07:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "100 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 100.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "111/65 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "93% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 93.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "47 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 47.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "41 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 41.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+71 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 71.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "152 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 152.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "38.0 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 38.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "74 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 74.0
          }
        ]
      },
      {
        "hour": "08:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "96 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 96.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "122/77 mmHg; MAP 92 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 92.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "21 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 21.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "47 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 47.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 10 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "37 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 37.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+60 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 60.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "181 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 181.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.8 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "52 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 52.0
          }
        ]
      },
      {
        "hour": "09:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "108 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 108.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "128/70 mmHg; MAP 89 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 89.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "8 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 8.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "20 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 20.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "94% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 30 cmH₂O; PEEP 9 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Average",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "30 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 30.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+28 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 28.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "170 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 170.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.9 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.9
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "37 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 37.0
          }
        ]
      },
      {
        "hour": "10:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "101 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 101.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "106/77 mmHg; MAP 87 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 87.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "9 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 9.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "94% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "41 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 41.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "29 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 29.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+49 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 49.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "197 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 197.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "72 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 72.0
          }
        ]
      },
      {
        "hour": "11:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "86 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 86.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "111/67 mmHg; MAP 82 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 82.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "21 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 21.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "92% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 92.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "45 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 45.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 22 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "29 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 29.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+42 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 42.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "152 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 152.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "67 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 67.0
          }
        ]
      },
      {
        "hour": "12:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "91 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 91.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "109/80 mmHg; MAP 90 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 90.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "22 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 22.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "94% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "30 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 30.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+86 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 86.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "141 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 141.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "72 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 72.0
          }
        ]
      },
      {
        "hour": "13:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "101 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 101.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "116/75 mmHg; MAP 89 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 89.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "24 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 24.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "94% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "45 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 45.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Average",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "26 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 26.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+62 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 62.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "140 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 140.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "38.0 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 38.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "40 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 40.0
          }
        ]
      },
      {
        "hour": "14:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "88 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 88.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "124/80 mmHg; MAP 95 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "9 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 9.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "41 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 41.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "31 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 31.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-12 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": -12.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "152 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 152.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "66 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 66.0
          }
        ]
      },
      {
        "hour": "15:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "99 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 99.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "111/80 mmHg; MAP 90 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 90.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "21 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 21.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "45 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 45.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 29 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "43 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 43.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+10 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 10.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "175 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 175.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.7 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "60 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 60.0
          }
        ]
      },
      {
        "hour": "16:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "100 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 100.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "126/68 mmHg; MAP 87 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 87.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "9 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 9.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "22 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 22.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "94% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "46 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 46.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "34 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 34.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+63 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 63.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "139 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 139.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "54 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 54.0
          }
        ]
      },
      {
        "hour": "17:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "92 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 92.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "121/77 mmHg; MAP 92 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 92.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "93% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 93.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "47 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 47.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "36 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 36.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+62 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 62.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "153 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 153.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.5 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.5
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "54 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 54.0
          }
        ]
      },
      {
        "hour": "18:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "94 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/68 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "23 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 23.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "94% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "47 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 47.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Average",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "27 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 27.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+77 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 77.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "171 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 171.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.8 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "58 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 58.0
          }
        ]
      },
      {
        "hour": "19:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "85 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 85.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "127/72 mmHg; MAP 90 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 90.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "93% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 93.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "48 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 48.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 22 cmH₂O; PEEP 9 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Average",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "45 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 45.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+79 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 79.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "171 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 171.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.6 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "46 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 46.0
          }
        ]
      },
      {
        "hour": "20:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "92 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 92.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "125/75 mmHg; MAP 92 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 92.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "21 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 21.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "41 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 41.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 9 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "42 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 42.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+72 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 72.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "176 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 176.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Mild discomfort",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "51 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 51.0
          }
        ]
      },
      {
        "hour": "21:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "91 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 91.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "117/69 mmHg; MAP 85 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 85.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "41 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 41.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "43 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 43.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+94 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "166 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 166.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.7 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "No vasoactive infusion; Hemodynamics stable",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "40 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 40.0
          }
        ]
      },
      {
        "hour": "22:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "89 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 89.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/69 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "20 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 20.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "94% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "42 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 42.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 28 cmH₂O; PEEP 10 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Alert and oriented",
            "unit": null,
            "status": "Average",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Average",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+10 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 10.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "171 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 171.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.6 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "38 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 38.0
          }
        ]
      },
      {
        "hour": "23:00",
        "overallStatus": "Average",
        "actionNotes": "Continue routine monitoring; reassess as clinically indicated.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "82 bpm; Sinus rhythm",
            "unit": "bpm",
            "status": "Average",
            "numericValue": 82.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "118/82 mmHg; MAP 94 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 94.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "9 mmHg",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 9.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 2–3 sec; Peripheral pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "21 breaths/min; Mildly increased, regular",
            "unit": "breaths/min",
            "status": "Average",
            "numericValue": 21.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "96% on supplemental oxygen",
            "unit": "%",
            "status": "Average",
            "numericValue": 96.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "42 mmHg; Acceptable waveform",
            "unit": "mmHg",
            "status": "Average",
            "numericValue": 42.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 22 cmH₂O; PEEP 9 cmH₂O",
            "unit": "cmH₂O",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "14; Mildly confused",
            "unit": null,
            "status": "Average",
            "numericValue": 14.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal and reactive",
            "unit": "mm",
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Drowsy but arousable",
            "unit": null,
            "status": "Average",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "26 mL/hr",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 26.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+75 mL",
            "unit": "mL",
            "status": "Average",
            "numericValue": 75.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "161 mg/dL",
            "unit": "mg/dL",
            "status": "Average",
            "numericValue": 161.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.5 °C",
            "unit": "°C",
            "status": "Average",
            "numericValue": 37.5
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 2; Mild pain indicators",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Minimal redness; Monitoring continued",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Low-dose vasoactive support; No recent adjustment",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, mildly delayed refill; Motor/sensory intact; Pulses 2+",
            "unit": null,
            "status": "Average",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "75 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Average",
            "numericValue": 75.0
          }
        ]
      }
    ]
  },
  {
    "patientId": "GU70051",
    "displayName": "priyanshu",
    "bed": "201",
    "unit": "ICU",
    "recordDate": "2026-09-30",
    "lastUpdated": "2026-09-30T23:00:00+05:30",
    "photoUrl": "/patients/priyanshu.jpeg",
    "overallStatus": "Normal",
    "hourlyRecords": [
      {
        "hour": "00:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "71 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 71.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/73 mmHg; MAP 84 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "56 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 56.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-17 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -17.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "147 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 147.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "17 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 17.0
          }
        ]
      },
      {
        "hour": "01:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "70 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 70.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/68 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "15 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "42 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "60 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 60.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+10 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 10.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "160 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 160.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "19 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 19.0
          }
        ]
      },
      {
        "hour": "02:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "69 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 69.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "106/74 mmHg; MAP 85 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 85.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "43 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "56 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 56.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+6 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "169 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 169.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "27 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 27.0
          }
        ]
      },
      {
        "hour": "03:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "69 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 69.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "115/78 mmHg; MAP 90 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 90.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "13 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 13.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "43 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 18 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "39 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+5 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "162 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 162.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.0 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "7 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 7.0
          }
        ]
      },
      {
        "hour": "04:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "70 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 70.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "101/68 mmHg; MAP 79 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 79.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "39 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "53 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 53.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+24 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 24.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "150 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 150.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "31 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 31.0
          }
        ]
      },
      {
        "hour": "05:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "84 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "109/77 mmHg; MAP 88 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 88.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "15 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "49 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 49.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-22 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -22.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "22 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 22.0
          }
        ]
      },
      {
        "hour": "06:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "65 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 65.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "111/74 mmHg; MAP 86 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 86.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "39 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 20 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "42 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-14 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -14.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "157 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 157.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.0 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "24 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 24.0
          }
        ]
      },
      {
        "hour": "07:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "84 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "112/68 mmHg; MAP 83 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 83.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 19 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "59 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 59.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-14 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -14.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "156 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 156.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "22 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 22.0
          }
        ]
      },
      {
        "hour": "08:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "93 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 93.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/74 mmHg; MAP 84 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "39 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "36 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 36.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+15 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "158 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 158.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "32 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 32.0
          }
        ]
      },
      {
        "hour": "09:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "86 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 86.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "110/66 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-7 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -7.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "170 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 170.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.7 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "15 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 15.0
          }
        ]
      },
      {
        "hour": "10:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "64 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 64.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "118/72 mmHg; MAP 87 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 87.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "46 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 46.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+11 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 11.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "153 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 153.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "13 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 13.0
          }
        ]
      },
      {
        "hour": "11:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "82 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 82.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "100/62 mmHg; MAP 75 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 75.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "99%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 99.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 19 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "49 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 49.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-12 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -12.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "155 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 155.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "25 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 25.0
          }
        ]
      },
      {
        "hour": "12:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "67 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 67.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "116/66 mmHg; MAP 83 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 83.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "39 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+22 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 22.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "162 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 162.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "33 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 33.0
          }
        ]
      },
      {
        "hour": "13:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "90 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 90.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "117/62 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "96%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 96.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 22 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "49 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 49.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+14 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "156 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 156.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "8 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 8.0
          }
        ]
      },
      {
        "hour": "14:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "83 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 83.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "95/67 mmHg; MAP 76 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 76.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "16 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 16.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "39 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "42 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+27 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 27.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "148 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 148.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "20 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 20.0
          }
        ]
      },
      {
        "hour": "15:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "90 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 90.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "96/66 mmHg; MAP 76 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 76.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "13 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 13.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-3 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -3.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "176 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 176.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "25 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 25.0
          }
        ]
      },
      {
        "hour": "16:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "87 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 87.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "97/65 mmHg; MAP 76 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 76.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "15 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "57 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 57.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-20 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -20.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "162 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 162.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "20 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 20.0
          }
        ]
      },
      {
        "hour": "17:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "67 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 67.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "95/68 mmHg; MAP 77 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 77.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "99%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 99.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "43 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 20 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-16 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -16.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "22 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 22.0
          }
        ]
      },
      {
        "hour": "18:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "94 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 94.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "117/65 mmHg; MAP 82 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 82.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "96%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 96.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "37 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+18 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "13 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 13.0
          }
        ]
      },
      {
        "hour": "19:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "68 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 68.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "96/74 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "46 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 46.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+9 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 9.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "167 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 167.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "6 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 6.0
          }
        ]
      },
      {
        "hour": "20:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "84 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/64 mmHg; MAP 78 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 78.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "40 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 22 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "48 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 48.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-24 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -24.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "156 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 156.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "30 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 30.0
          }
        ]
      },
      {
        "hour": "21:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "93 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 93.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "109/67 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "52 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 52.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-1 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "167 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 167.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.7 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "20 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 20.0
          }
        ]
      },
      {
        "hour": "22:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "88 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 88.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "103/69 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "42 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "36 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 36.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-22 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -22.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "152 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 152.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "12 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 12.0
          }
        ]
      },
      {
        "hour": "23:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "75 bpm; Normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 75.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/66 mmHg; MAP 79 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 79.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "13 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 13.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "38 mmHg; Normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "51 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 51.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+23 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 23.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.8 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "15 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 15.0
          }
        ]
      }
    ]
  },
  {
    "patientId": "GU70057",
    "displayName": "shreya jayswal",
    "bed": "201",
    "unit": "ICU",
    "recordDate": "2026-09-30",
    "lastUpdated": "2026-09-30T23:00:00+05:30",
    "photoUrl": null,
    "overallStatus": "Normal",
    "hourlyRecords": [
      {
        "hour": "00:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "71 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 71.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/73 mmHg; MAP 84 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "37 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "56 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 56.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-17 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -17.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "147 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 147.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "17 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 17.0
          }
        ]
      },
      {
        "hour": "01:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "70 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 70.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/68 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "15 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "42 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "60 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 60.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+10 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 10.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "160 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 160.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "19 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 19.0
          }
        ]
      },
      {
        "hour": "02:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "69 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 69.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "106/74 mmHg; MAP 85 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 85.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "43 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "56 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 56.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+6 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "169 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 169.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "27 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 27.0
          }
        ]
      },
      {
        "hour": "03:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "69 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 69.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "115/78 mmHg; MAP 90 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 90.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "13 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 13.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "43 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 18 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "39 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+5 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "162 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 162.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.0 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "7 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 7.0
          }
        ]
      },
      {
        "hour": "04:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "70 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 70.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "101/68 mmHg; MAP 79 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 79.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "39 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "53 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 53.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+24 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 24.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "150 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 150.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "31 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 31.0
          }
        ]
      },
      {
        "hour": "05:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "84 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "109/77 mmHg; MAP 88 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 88.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "15 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "40 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "49 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 49.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-22 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -22.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "22 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 22.0
          }
        ]
      },
      {
        "hour": "06:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "65 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 65.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "111/74 mmHg; MAP 86 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 86.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "39 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 20 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "42 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-14 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -14.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "157 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 157.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.0 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "24 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 24.0
          }
        ]
      },
      {
        "hour": "07:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "84 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "112/68 mmHg; MAP 83 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 83.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "38 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 19 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "59 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 59.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-14 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -14.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "156 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 156.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "22 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 22.0
          }
        ]
      },
      {
        "hour": "08:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "93 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 93.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/74 mmHg; MAP 84 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "39 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "36 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 36.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+15 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "158 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 158.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "32 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 32.0
          }
        ]
      },
      {
        "hour": "09:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "86 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 86.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "110/66 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "37 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 26 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-7 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -7.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "170 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 170.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.7 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "15 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 15.0
          }
        ]
      },
      {
        "hour": "10:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "64 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 64.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "118/72 mmHg; MAP 87 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 87.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "19 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 19.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "37 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "46 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 46.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+11 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 11.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "153 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 153.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "13 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 13.0
          }
        ]
      },
      {
        "hour": "11:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "82 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 82.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "100/62 mmHg; MAP 75 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 75.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "99%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 99.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "38 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 19 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "49 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 49.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-12 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -12.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "155 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 155.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "25 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 25.0
          }
        ]
      },
      {
        "hour": "12:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "67 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 67.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "116/66 mmHg; MAP 83 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 83.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "40 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "39 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+22 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 22.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "162 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 162.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "33 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 33.0
          }
        ]
      },
      {
        "hour": "13:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "90 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 90.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "117/62 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "96%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 96.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "40 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 22 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "49 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 49.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+14 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "156 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 156.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "8 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 8.0
          }
        ]
      },
      {
        "hour": "14:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "83 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 83.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "95/67 mmHg; MAP 76 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 76.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "16 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 16.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "39 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 39.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 7 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "42 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+27 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 27.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "148 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 148.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "20 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 20.0
          }
        ]
      },
      {
        "hour": "15:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "90 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 90.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "96/66 mmHg; MAP 76 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 76.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "13 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 13.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "38 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 24 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-3 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -3.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "176 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 176.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.4 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "25 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 25.0
          }
        ]
      },
      {
        "hour": "16:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "87 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 87.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "97/65 mmHg; MAP 76 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 76.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "15 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "37 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "57 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 57.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-20 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -20.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "162 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 162.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "20 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 20.0
          }
        ]
      },
      {
        "hour": "17:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "67 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 67.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "95/68 mmHg; MAP 77 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 77.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "6 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 6.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "99%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 99.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "43 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 43.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 20 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "4 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-16 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -16.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "22 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 22.0
          }
        ]
      },
      {
        "hour": "18:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "94 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 94.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "117/65 mmHg; MAP 82 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 82.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "96%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 96.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "37 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 37.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 23 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "44 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 44.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+18 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.3 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "13 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 13.0
          }
        ]
      },
      {
        "hour": "19:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "68 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 68.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "96/74 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "5 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 5.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "14 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 14.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "98%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 98.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "38 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "46 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 46.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+9 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 9.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "167 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 167.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.1 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "6 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 6.0
          }
        ]
      },
      {
        "hour": "20:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "84 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 84.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/64 mmHg; MAP 78 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 78.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "7 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 7.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "40 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 40.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 22 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "48 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 48.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-24 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -24.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "156 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 156.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "37.2 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 37.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "30 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 30.0
          }
        ]
      },
      {
        "hour": "21:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "93 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 93.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "109/67 mmHg; MAP 81 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 81.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "18 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 18.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "38 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 25 cmH₂O; PEEP 5 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "0; Alert and calm",
            "unit": null,
            "status": "Normal",
            "numericValue": 0.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "52 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 52.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-1 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "167 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 167.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.7 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "20 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 20.0
          }
        ]
      },
      {
        "hour": "22:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "88 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 88.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "103/69 mmHg; MAP 80 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 80.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "3 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 3.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "17 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 17.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "95%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 95.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "42 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 42.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 27 cmH₂O; PEEP 6 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "2 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "36 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 36.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "-22 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": -22.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "152 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 152.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.6 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 1; Minimal pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "12 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 12.0
          }
        ]
      },
      {
        "hour": "23:00",
        "overallStatus": "Normal",
        "actionNotes": "Continue routine monitoring.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; normal sinus rhythm",
            "observedValue": "75 bpm; normal sinus rhythm",
            "unit": "bpm",
            "status": "Normal",
            "numericValue": 75.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "105/66 mmHg; MAP 79 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 79.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "4 mmHg",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 4.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT <2 sec; Bilateral peripheral pulses 2+",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "13 breaths/min; Unlabored, regular",
            "unit": "breaths/min",
            "status": "Normal",
            "numericValue": 13.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "97%",
            "unit": "%",
            "status": "Normal",
            "numericValue": 97.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; normal box-waveform",
            "observedValue": "38 mmHg; normal waveform",
            "unit": "mmHg",
            "status": "Normal",
            "numericValue": 38.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 21 cmH₂O; PEEP 8 cmH₂O",
            "unit": "cmH₂O",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "15; Fully alert and oriented",
            "unit": null,
            "status": "Normal",
            "numericValue": 15.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "3 mm; Equal, round, briskly reactive",
            "unit": "mm",
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-1; Slightly drowsy",
            "unit": null,
            "status": "Normal",
            "numericValue": -1.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "51 mL/hr",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 51.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+23 mL",
            "unit": "mL",
            "status": "Normal",
            "numericValue": 23.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for normal illness)",
            "observedValue": "174 mg/dL",
            "unit": "mg/dL",
            "status": "Normal",
            "numericValue": 174.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "36.8 °C",
            "unit": "°C",
            "status": "Normal",
            "numericValue": 36.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 0; No pain expression",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Clean, dry, intact; Clear trace",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Stable target MAP; No dose adjustment",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Warm, pink, intact motor/sensory; Distal pulse palpable",
            "unit": null,
            "status": "Normal",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "15 mL/hr; Serous output; No active air leak",
            "unit": "mL/hr",
            "status": "Normal",
            "numericValue": 15.0
          }
        ]
      }
    ]
  },
  {
    "patientId": "GU70060",
    "displayName": "supriya mishra",
    "bed": "204",
    "unit": "ICU",
    "recordDate": "2026-09-30",
    "lastUpdated": "2026-09-30T23:00:00+05:30",
    "photoUrl": null,
    "overallStatus": "Critical",
    "hourlyRecords": [
      {
        "hour": "00:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "145 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 145.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "80/46 mmHg; MAP 57 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 57.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "14 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 14.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "33 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 33.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "88% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 88.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "59 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 59.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 35 cmH₂O; PEEP 10 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "11; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 11.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "15 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 15.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+335 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 335.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "298 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 298.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.8 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "167 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 167.0
          }
        ]
      },
      {
        "hour": "01:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "127 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 127.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "85/48 mmHg; MAP 60 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 60.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "13 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 13.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "36 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 36.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "83% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 83.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "56 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 56.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 31 cmH₂O; PEEP 10 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "9; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 9.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-3; Moderate sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -3.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "13 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 13.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+199 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 199.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "309 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 309.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "38.6 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 38.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 5; Significant pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "134 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 134.0
          }
        ]
      },
      {
        "hour": "02:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "133 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 133.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "82/52 mmHg; MAP 62 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 62.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "14 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 14.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "31 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 31.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "89% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 89.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "61 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 61.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 36 cmH₂O; PEEP 13 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "9; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 9.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-3; Moderate sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -3.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "8 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 8.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+386 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 386.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "295 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 295.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "40.0 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 40.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 5; Significant pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "124 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 124.0
          }
        ]
      },
      {
        "hour": "03:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "148 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 148.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "78/50 mmHg; MAP 59 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 59.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "11 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 11.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "34 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 34.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "82% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 82.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "53 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 53.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 38 cmH₂O; PEEP 11 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "8; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 8.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "13 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 13.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+322 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 322.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "301 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 301.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.7 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "170 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 170.0
          }
        ]
      },
      {
        "hour": "04:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "133 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 133.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "80/55 mmHg; MAP 63 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 63.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "10 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "30 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 30.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "83% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 83.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "49 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 49.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 32 cmH₂O; PEEP 10 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "8; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 8.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-3; Moderate sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -3.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "8 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 8.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+310 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 310.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "230 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 230.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.6 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.6
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "131 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 131.0
          }
        ]
      },
      {
        "hour": "05:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "130 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 130.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "79/52 mmHg; MAP 61 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 61.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "13 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 13.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "32 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 32.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "82% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 82.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "54 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 54.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 37 cmH₂O; PEEP 11 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "9; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 9.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "12 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 12.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+277 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 277.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "253 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 253.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.1 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "144 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 144.0
          }
        ]
      },
      {
        "hour": "06:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "139 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 139.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "83/54 mmHg; MAP 64 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 64.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "16 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 16.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "28 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 28.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "84% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 84.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "62 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 62.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 38 cmH₂O; PEEP 13 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "11; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 11.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "11 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 11.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+284 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 284.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "292 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 292.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "38.8 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 38.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 5; Significant pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "132 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 132.0
          }
        ]
      },
      {
        "hour": "07:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "145 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 145.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "87/45 mmHg; MAP 59 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 59.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "13 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 13.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "28 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 28.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "88% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 88.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "50 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 50.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 38 cmH₂O; PEEP 10 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "11; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 11.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-3; Moderate sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -3.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "12 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 12.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+373 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 373.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "266 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 266.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.1 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "133 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 133.0
          }
        ]
      },
      {
        "hour": "08:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "124 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 124.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "90/52 mmHg; MAP 65 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 65.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "15 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 15.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "32 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 32.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "88% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 88.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "62 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 62.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 35 cmH₂O; PEEP 13 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "11; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 11.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-3; Moderate sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -3.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "9 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 9.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+375 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 375.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "241 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 241.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.7 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "120 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 120.0
          }
        ]
      },
      {
        "hour": "09:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "130 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 130.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "83/50 mmHg; MAP 61 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 61.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "13 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 13.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "37 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 37.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "84% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 84.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "53 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 53.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 32 cmH₂O; PEEP 13 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "9; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 9.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "14 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 14.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+280 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 280.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "238 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 238.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.3 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.3
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "118 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 118.0
          }
        ]
      },
      {
        "hour": "10:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "147 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 147.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "78/43 mmHg; MAP 55 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 55.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "10 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "34 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 34.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "84% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 84.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "51 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 51.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 35 cmH₂O; PEEP 13 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "10; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "17 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 17.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+262 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 262.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "257 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 257.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "38.9 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 38.9
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "143 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 143.0
          }
        ]
      },
      {
        "hour": "11:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "133 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 133.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "91/50 mmHg; MAP 64 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 64.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "12 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 12.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "36 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 36.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "86% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 86.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "60 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 60.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 30 cmH₂O; PEEP 14 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "10; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "18 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 18.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+383 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 383.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "270 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 270.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.8 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "171 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 171.0
          }
        ]
      },
      {
        "hour": "12:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "141 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 141.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "84/57 mmHg; MAP 66 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 66.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "12 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 12.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "33 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 33.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "84% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 84.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "59 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 59.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 30 cmH₂O; PEEP 14 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "8; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 8.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "9 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 9.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+331 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 331.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "263 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 263.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "38.9 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 38.9
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 5; Significant pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "147 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 147.0
          }
        ]
      },
      {
        "hour": "13:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "129 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 129.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "88/53 mmHg; MAP 65 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 65.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "10 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "28 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 28.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "83% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 83.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "58 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 58.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 38 cmH₂O; PEEP 13 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "11; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 11.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "18 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 18.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+378 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 378.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "298 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 298.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.4 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "173 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 173.0
          }
        ]
      },
      {
        "hour": "14:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "120 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 120.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "91/52 mmHg; MAP 65 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 65.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "12 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 12.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "30 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 30.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "87% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 87.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "55 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 55.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 38 cmH₂O; PEEP 10 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "10; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "10 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+218 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 218.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "238 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 238.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.2 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.2
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "107 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 107.0
          }
        ]
      },
      {
        "hour": "15:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "120 bpm; Sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 120.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "78/55 mmHg; MAP 63 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 63.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "16 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 16.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "35 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 35.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "82% despite supplemental oxygen",
            "unit": "%",
            "status": "Critical",
            "numericValue": 82.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "59 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 59.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 36 cmH₂O; PEEP 12 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "10; Altered response",
            "unit": null,
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "19 mL/hr; Oliguric",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 19.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+264 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 264.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "223 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 223.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.7 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 5; Significant pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "149 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 149.0
          }
        ]
      },
      {
        "hour": "16:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "154 bpm; Persistent sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 154.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "71/44 mmHg; MAP 53 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 53.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "16 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 16.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "37 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 37.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "79% despite high-flow oxygen/ventilatory support",
            "unit": "%",
            "status": "Critical",
            "numericValue": 79.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "52 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 52.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 33 cmH₂O; PEEP 13 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "7; Markedly decreased responsiveness",
            "unit": null,
            "status": "Critical",
            "numericValue": 7.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-3; Moderate sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -3.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "8 mL/hr; Severe oliguria",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 8.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+308 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 308.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "281 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 281.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "40.0 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 40.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "134 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 134.0
          }
        ]
      },
      {
        "hour": "17:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "149 bpm; Persistent sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 149.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "72/40 mmHg; MAP 51 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 51.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "13 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 13.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "29 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 29.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "82% despite high-flow oxygen/ventilatory support",
            "unit": "%",
            "status": "Critical",
            "numericValue": 82.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "54 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 54.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 34 cmH₂O; PEEP 10 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "5; Markedly decreased responsiveness",
            "unit": null,
            "status": "Critical",
            "numericValue": 5.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "7 mL/hr; Severe oliguria",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 7.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+411 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 411.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "276 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 276.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.7 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "146 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 146.0
          }
        ]
      },
      {
        "hour": "18:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "149 bpm; Persistent sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 149.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "76/47 mmHg; MAP 57 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 57.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "10 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "32 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 32.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "77% despite high-flow oxygen/ventilatory support",
            "unit": "%",
            "status": "Critical",
            "numericValue": 77.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "57 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 57.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 30 cmH₂O; PEEP 10 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "7; Markedly decreased responsiveness",
            "unit": null,
            "status": "Critical",
            "numericValue": 7.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "9 mL/hr; Severe oliguria",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 9.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+398 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 398.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "247 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 247.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.7 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.7
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 5; Significant pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "82 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 82.0
          }
        ]
      },
      {
        "hour": "19:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "153 bpm; Persistent sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 153.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "82/50 mmHg; MAP 61 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 61.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "12 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 12.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "31 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 31.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "80% despite high-flow oxygen/ventilatory support",
            "unit": "%",
            "status": "Critical",
            "numericValue": 80.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "53 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 53.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 38 cmH₂O; PEEP 12 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "5; Markedly decreased responsiveness",
            "unit": null,
            "status": "Critical",
            "numericValue": 5.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "7 mL/hr; Severe oliguria",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 7.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+195 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 195.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "258 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 258.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.1 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.1
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 5; Significant pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Vasopressor titrated upward for persistent hypotension",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "163 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 163.0
          }
        ]
      },
      {
        "hour": "20:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "148 bpm; Persistent sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 148.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "77/44 mmHg; MAP 55 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 55.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "13 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 13.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "36 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 36.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "81% despite high-flow oxygen/ventilatory support",
            "unit": "%",
            "status": "Critical",
            "numericValue": 81.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "48 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 48.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 31 cmH₂O; PEEP 11 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "8; Markedly decreased responsiveness",
            "unit": null,
            "status": "Critical",
            "numericValue": 8.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-3; Moderate sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -3.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "7 mL/hr; Severe oliguria",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 7.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+387 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 387.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "292 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 292.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.8 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.8
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "93 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 93.0
          }
        ]
      },
      {
        "hour": "21:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "158 bpm; Persistent sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 158.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "71/49 mmHg; MAP 56 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 56.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "10 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "38 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 38.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "84% despite high-flow oxygen/ventilatory support",
            "unit": "%",
            "status": "Critical",
            "numericValue": 84.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "52 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 52.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 37 cmH₂O; PEEP 12 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "5; Markedly decreased responsiveness",
            "unit": null,
            "status": "Critical",
            "numericValue": 5.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "10 mL/hr; Severe oliguria",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 10.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+303 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 303.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "237 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 237.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "40.4 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 40.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "167 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 167.0
          }
        ]
      },
      {
        "hour": "22:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "141 bpm; Persistent sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 141.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "72/41 mmHg; MAP 51 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 51.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "11 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 11.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "33 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 33.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "78% despite high-flow oxygen/ventilatory support",
            "unit": "%",
            "status": "Critical",
            "numericValue": 78.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "49 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 49.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 35 cmH₂O; PEEP 14 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "5; Markedly decreased responsiveness",
            "unit": null,
            "status": "Critical",
            "numericValue": 5.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "6 mm; Sluggish reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-3; Moderate sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -3.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "4 mL/hr; Severe oliguria",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 4.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+309 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 309.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "265 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 265.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "39.4 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 39.4
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 5; Significant pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "147 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 147.0
          }
        ]
      },
      {
        "hour": "23:00",
        "overallStatus": "Critical",
        "actionNotes": "Immediate clinical assessment and escalation required.",
        "observations": [
          {
            "parameterId": "heart-rate",
            "label": "Heart Rate & Rhythm",
            "category": "Cardiovascular",
            "normalRange": "60–100 bpm; Normal sinus rhythm",
            "observedValue": "145 bpm; Persistent sinus tachycardia",
            "unit": "bpm",
            "status": "Critical",
            "numericValue": 145.0
          },
          {
            "parameterId": "blood-pressure",
            "label": "Blood Pressure & MAP",
            "category": "Cardiovascular",
            "normalRange": "SBP: 90–120 mmHg; DBP: 60–80 mmHg; MAP: 70–105 mmHg",
            "observedValue": "68/42 mmHg; MAP 51 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 51.0
          },
          {
            "parameterId": "cvp",
            "label": "Central Venous Pressure",
            "category": "Cardiovascular",
            "normalRange": "2–8 mmHg (spontaneous); 8–12 mmHg (ventilated)",
            "observedValue": "16 mmHg",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 16.0
          },
          {
            "parameterId": "capillary-refill",
            "label": "Capillary Refill & Pulses",
            "category": "Cardiovascular",
            "normalRange": "CRT <2 seconds; Bilateral peripheral pulses 2+",
            "observedValue": "CRT 4–5 sec; Peripheral pulses weak, 1+",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "respiratory-rate",
            "label": "Respiratory Rate & Pattern",
            "category": "Respiratory",
            "normalRange": "12–20 breaths/min; Unlabored, regular rhythm",
            "observedValue": "37 breaths/min; Labored, irregular",
            "unit": "breaths/min",
            "status": "Critical",
            "numericValue": 37.0
          },
          {
            "parameterId": "spo2",
            "label": "Oxygen Saturation (SpO₂)",
            "category": "Respiratory",
            "normalRange": "94%–100% (General ICU); 88%–92% (Hypercapnic COPD)",
            "observedValue": "80% despite high-flow oxygen/ventilatory support",
            "unit": "%",
            "status": "Critical",
            "numericValue": 80.0
          },
          {
            "parameterId": "etco2",
            "label": "End-Tidal CO₂ (EtCO₂)",
            "category": "Respiratory",
            "normalRange": "35–45 mmHg; Normal box-waveform",
            "observedValue": "50 mmHg; Abnormal waveform",
            "unit": "mmHg",
            "status": "Critical",
            "numericValue": 50.0
          },
          {
            "parameterId": "ventilator",
            "label": "Ventilator Parameters",
            "category": "Respiratory",
            "normalRange": "Ppeak <30 cmH₂O; PEEP: 5–8 cmH₂O",
            "observedValue": "Ppeak 33 cmH₂O; PEEP 12 cmH₂O",
            "unit": "cmH₂O",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "gcs",
            "label": "Glasgow Coma Scale (GCS)",
            "category": "Neurological",
            "normalRange": "GCS 15; Fully alert and oriented",
            "observedValue": "5; Markedly decreased responsiveness",
            "unit": null,
            "status": "Critical",
            "numericValue": 5.0
          },
          {
            "parameterId": "pupils",
            "label": "Pupillary Light Reflex",
            "category": "Neurological",
            "normalRange": "2–4 mm diameter; Equal, round, briskly reactive",
            "observedValue": "5 mm; Sluggish bilateral reaction",
            "unit": "mm",
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "rass",
            "label": "Sedation Score (RASS)",
            "category": "Neurological",
            "normalRange": "0 to -1; Alert and calm to slightly drowsy",
            "observedValue": "-4; Deep sedation",
            "unit": null,
            "status": "Critical",
            "numericValue": -4.0
          },
          {
            "parameterId": "urine-output",
            "label": "Hourly Urine Output",
            "category": "Fluids & renal",
            "normalRange": "0.5–1.0 mL/kg/hr (~30–60 mL/hr for standard adult)",
            "observedValue": "7 mL/hr; Severe oliguria",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 7.0
          },
          {
            "parameterId": "fluid-balance",
            "label": "Fluid Balance (Net I/O)",
            "category": "Fluids & renal",
            "normalRange": "Neutral balance (±500 mL / 24 hrs)",
            "observedValue": "+383 mL",
            "unit": "mL",
            "status": "Critical",
            "numericValue": 383.0
          },
          {
            "parameterId": "glucose",
            "label": "Point-of-Care Blood Glucose",
            "category": "Metabolic",
            "normalRange": "140–180 mg/dL (ICU target for critical illness)",
            "observedValue": "251 mg/dL",
            "unit": "mg/dL",
            "status": "Critical",
            "numericValue": 251.0
          },
          {
            "parameterId": "temperature",
            "label": "Core Body Temperature",
            "category": "Metabolic",
            "normalRange": "36.5°C–37.5°C (97.7°F–99.5°F)",
            "observedValue": "40.0 °C",
            "unit": "°C",
            "status": "Critical",
            "numericValue": 40.0
          },
          {
            "parameterId": "pain",
            "label": "Pain Score (CPOT / BPS)",
            "category": "Neurological",
            "normalRange": "CPOT: 0–1; BPS: 3–4; No or minimal pain expression",
            "observedValue": "CPOT 6; Marked pain indicators",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "line-integrity",
            "label": "Line & Dressing Integrity",
            "category": "Lines & safety",
            "normalRange": "Clean, dry, intact dressing; Pulsatile arterial wave; clear trace",
            "observedValue": "Dressing damp/soiled; Redness at insertion site; Requires review",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "vasoactive",
            "label": "Vasoactive Infusion Titration",
            "category": "Cardiovascular",
            "normalRange": "Stable target MAP achieved; Minimal dose adjustments",
            "observedValue": "Norepinephrine infusion increased; MAP below target",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "neurovascular",
            "label": "Neurovascular Limb Checks",
            "category": "Lines & safety",
            "normalRange": "Warm, pink, intact motor/sensory; Palpable distal pulse",
            "observedValue": "Cool extremity; Delayed capillary refill; Distal pulse weak",
            "unit": null,
            "status": "Critical",
            "numericValue": null
          },
          {
            "parameterId": "drain-output",
            "label": "Drain & Tube Output",
            "category": "Lines & safety",
            "normalRange": "<50 mL/hr serous output; No active air leak",
            "observedValue": "99 mL/hr; Bloody/turbid output; Requires urgent review",
            "unit": "mL/hr",
            "status": "Critical",
            "numericValue": 99.0
          }
        ]
      }
    ]
  }
];
