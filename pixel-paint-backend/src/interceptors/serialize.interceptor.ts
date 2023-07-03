import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor
} from '@nestjs/common'
import { ClassConstructor, plainToClass } from 'class-transformer'
import { Observable, map } from 'rxjs'

@Injectable()
export class SerializeInterceptor<T> implements NestInterceptor<T> {
    constructor(private readonly dto: ClassConstructor<T>) {}

    intercept(
        context: ExecutionContext,
        next: CallHandler
    ): Observable<T> | Promise<Observable<T>> {
        return next.handle().pipe(map((data) => plainToClass(this.dto, data)))
    }
}
