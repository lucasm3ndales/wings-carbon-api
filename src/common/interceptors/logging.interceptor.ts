import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";


@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoggingInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const { method, url, ip } = request;
        const className = context.getClass().name;
        const handlerName = context.getHandler().name;

        this.logger.log(
            `[${className}#${handlerName}] ==> ${method} ${url} from ${ip}`,
        );

        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => {
                    const response = context.switchToHttp().getResponse();
                    const delay = Date.now() - now;
                    this.logger.log(
                        `[${className}#${handlerName}] <== ${response.statusCode} (${delay}ms)`,
                    );
                }),
            );
    }
}
