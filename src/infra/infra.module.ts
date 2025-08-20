import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { I18NModule } from "./i18n/i18n.module";
import { LoggerModule } from "./logger/logger.module";

@Module({
  imports: [
    ConfigModule, 
    DatabaseModule, 
    I18NModule,
    LoggerModule
],
})
export class InfraModule {}
