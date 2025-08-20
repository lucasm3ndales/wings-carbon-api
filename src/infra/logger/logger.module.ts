import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

@Module({
    imports: [
        WinstonModule.forRoot({
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                        winston.format.ms(),
                        winston.format.colorize(),
                        winston.format.printf(
                            (info) => `${info.timestamp} [${info.level}] ${info.message} ${info.ms}`,
                        ),
                    ),
                }),

                new winston.transports.DailyRotateFile({
                    filename: 'logs/application-%DATE%.log', 
                    datePattern: 'YYYY-MM-DD',               
                    zippedArchive: true,                     
                    maxSize: '20m',                          
                    maxFiles: '14d',                         
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json(),                
                    ),
                }),

                new winston.transports.DailyRotateFile({
                    level: 'error',                          
                    filename: 'logs/error-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '30d',                        
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.json(),
                    ),
                }),
            ],
        }),
    ],
})
export class LoggerModule { }