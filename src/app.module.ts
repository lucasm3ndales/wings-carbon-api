import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { UserModule } from './modules/user/user.module';
import { AccountModule } from './modules/account/account.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [InfraModule, UserModule, AccountModule, AuthModule],
})
export class AppModule {}
