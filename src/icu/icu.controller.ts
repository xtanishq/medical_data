import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ResolvePatientDto } from './dto/resolve-patient.dto';
import { IcuService } from './icu.service';
import type { PatientRecord } from './icu.types';

@Controller('api/patients')
export class IcuController {
  constructor(private readonly icuService: IcuService) {}

  @Post('resolve')
  @HttpCode(200)
  resolve(@Body() dto: ResolvePatientDto): PatientRecord {
    return this.icuService.resolvePatient(dto.value);
  }

  @Get(':patientId')
  findOne(@Param('patientId') patientId: string): PatientRecord {
    return this.icuService.findPatient(patientId);
  }
}
