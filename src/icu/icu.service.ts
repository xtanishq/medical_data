import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ICU_PATIENTS } from './icu.data';
import { PatientRecord } from './icu.types';

@Injectable()
export class IcuService {
  listPatients() {
    return ICU_PATIENTS.map(
      ({ patientId, displayName, overallStatus, photoUrl }) => ({
        patientId,
        displayName,
        overallStatus,
        photoUrl: photoUrl ?? null,
      }),
    );
  }

  resolvePatient(input: string): PatientRecord {
    const patientId = this.extractPatientId(input);
    const patient = ICU_PATIENTS.find((item) => item.patientId === patientId);

    if (!patient) {
      throw new NotFoundException('Patient record not found');
    }

    return patient;
  }

  findPatient(patientId: string): PatientRecord {
    return this.resolvePatient(patientId);
  }

  private extractPatientId(input: string): string {
    const value = input.trim();

    if (!value) {
      throw new BadRequestException('Patient ID or QR value is required');
    }

    const fromJson = this.patientIdFromJson(value);
    const fromUrl = this.patientIdFromUrl(value);
    const candidate = (fromJson ?? fromUrl ?? value).trim().toUpperCase();

    if (!/^[A-Z]{2}\d{5}$/.test(candidate)) {
      throw new BadRequestException('Patient ID or QR code format is invalid');
    }

    return candidate;
  }

  private patientIdFromJson(value: string): string | null {
    if (!value.startsWith('{')) return null;

    try {
      const parsed = JSON.parse(value) as { patientId?: unknown };
      return typeof parsed.patientId === 'string' ? parsed.patientId : null;
    } catch {
      return null;
    }
  }

  private patientIdFromUrl(value: string): string | null {
    try {
      const url = new URL(value);
      const queryValue =
        url.searchParams.get('patientId') ?? url.searchParams.get('patient');
      if (queryValue) return queryValue;

      const match = url.pathname.match(/\/patients?\/([A-Za-z]{2}\d{5})\/?$/);
      return match?.[1] ?? null;
    } catch {
      return null;
    }
  }
}
