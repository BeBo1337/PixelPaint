import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import PerformanceInterceptor from './interceptors/performace.interceptor'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
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
    app.useGlobalInterceptors(new PerformanceInterceptor())
    app.enableCors()

    await app.listen(3000)
}

bootstrap()
