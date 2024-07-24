import { Module } from '@nestjs/common';
import { GreenApiController } from './controllers/GreenApiController';

@Module({
    controllers: [GreenApiController],
})
export class GreenApiModule {}
