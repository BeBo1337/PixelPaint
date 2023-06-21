import {
    CallHandler,
    ExecutionContext,
    Logger,
    NestInterceptor
} from '@nestjs/common'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'

export default class PerformanceInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>
    ): Observable<any> | Promise<Observable<any>> {
        const start = Date.now()
        return next.handle().pipe(
            tap(() => {
                const end = Date.now()
                const diff = end - start
                Logger.log(
                    `[${
                        context.getClass().name
                    }]: Request executed in: ${diff}ms`
                )
            })
        )
    }
}
