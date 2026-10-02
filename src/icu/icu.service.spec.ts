import { BadRequestException, NotFoundException } from '@nestjs/common';
import { IcuService } from './icu.service';

describe('IcuService', () => {
  let service: IcuService;

  beforeEach(() => {
    service = new IcuService();
  });

  it('returns a complete patient record from a manual ID', () => {
    const patient = service.resolvePatient('gu70050');

    expect(patient.patientId).toBe('GU70050');
    expect(patient.hourlyRecords).toHaveLength(24);
    expect(patient.hourlyRecords[0].observations).toHaveLength(20);
  });

  it('resolves supported QR payloads', () => {
    expect(service.resolvePatient('{"patientId":"GU70049"}').patientId).toBe(
      'GU70049',
    );
    expect(
      service.resolvePatient('https://careboard.test/patient/GU70050')
        .patientId,
    ).toBe('GU70050');
  });

  it('rejects malformed and unknown identifiers', () => {
    expect(() => service.resolvePatient('invalid')).toThrow(
      BadRequestException,
    );
    expect(() => service.resolvePatient('GU99999')).toThrow(NotFoundException);
  });
});
