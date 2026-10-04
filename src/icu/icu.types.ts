export type ClinicalStatus =
  'Normal' | 'Average' | 'Review' | 'Critical' | 'Not Assessed';

export type ClinicalCategory =
  | 'Cardiovascular'
  | 'Respiratory'
  | 'Neurological'
  | 'Fluids & renal'
  | 'Metabolic'
  | 'Lines & safety';

export type Observation = {
  parameterId: string;
  label: string;
  category: ClinicalCategory;
  normalRange: string;
  observedValue: string;
  unit: string | null;
  status: ClinicalStatus;
  numericValue: number | null;
};

export type HourlyRecord = {
  hour: string;
  overallStatus: ClinicalStatus;
  actionNotes: string;
  observations: Observation[];
};

export type PatientRecord = {
  photoUrl?: string | null;
  patientId: string;
  displayName: string;
  bed: string;
  unit: string;
  recordDate: string;
  lastUpdated: string;
  overallStatus: ClinicalStatus;
  hourlyRecords: HourlyRecord[];
};
