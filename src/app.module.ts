import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [InfraModule, UserModule, AuthModule, EventEmitterModule.forRoot()],
})
export class AppModule {}
