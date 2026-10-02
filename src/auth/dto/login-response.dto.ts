import { UserResponseDto } from '../../users/dto/user-response.dto';

export class LoginResponseDto {
  message: string;
  user: UserResponseDto;
}
