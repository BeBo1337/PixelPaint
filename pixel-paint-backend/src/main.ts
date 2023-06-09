import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import PerformanceInterceptor from './interceptors/performace.interceptor'
import { ConfigService } from '@nestjs/config'
import { TimeoutInterceptor } from './interceptors/timeout.interceptor'
import { SerializeInterceptor } from './interceptors/serialize.interceptor'
import ScoreDto from './database/dto/score.dto'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)
    const port = configService.get<number>('PORT')
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            transformOptions: {
                enableImplicitConversion: true
            }
        })
    )
    app.useGlobalInterceptors(
        new PerformanceInterceptor(),
        new TimeoutInterceptor(),
        new SerializeInterceptor(ScoreDto)
    )
    app.enableCors()
    await app.listen(port)
}

bootstrap()
