
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../../../type-orm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...dataSourceOptions,
        entities: [__dirname + '/../../modules/**/*.entity{.ts,.js}'],
        migrations: undefined,
        synchronize: configService.get<string>('NODE_ENV') !== 'prod',
        logging: configService.get<string>('NODE_ENV') === 'dev',
      }),
    }),
  ],
})

export class DatabaseModule {}