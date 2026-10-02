export class HealthResponseDto {
  status: 'ok';
  service: string;
  uptimeSeconds: number;
  checkedAt: string;
}
