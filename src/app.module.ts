import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [InfraModule, UserModule, AuthModule],
})
export class AppModule {}
