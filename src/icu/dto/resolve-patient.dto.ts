import { IsString, MaxLength, MinLength } from 'class-validator';

export class ResolvePatientDto {
  @IsString()
  @MinLength(3)
  @MaxLength(500)
  value: string;
}
