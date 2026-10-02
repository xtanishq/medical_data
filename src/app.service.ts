import { Injectable } from '@nestjs/common';
import { HealthResponseDto } from './dto/health-response.dto';

@Injectable()
export class AppService {
  getApiInfo(): string {
    return 'Backend API is running';
  }

  getHealth(): HealthResponseDto {
    return {
      status: 'ok',
      service: 'backend-api',
      uptimeSeconds: Math.floor(process.uptime()),
      checkedAt: new Date().toISOString(),
    };
  }
}
