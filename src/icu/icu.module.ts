import { Module } from '@nestjs/common';
import { IcuController } from './icu.controller';
import { IcuService } from './icu.service';

@Module({
  controllers: [IcuController],
  providers: [IcuService],
})
export class IcuModule {}
