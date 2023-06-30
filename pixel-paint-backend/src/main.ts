import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import PerformanceInterceptor from './interceptors/performace.interceptor'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)
    const port = configService.get<number>('PORT')
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true
        })
    )
    app.useGlobalInterceptors(new PerformanceInterceptor())
    app.enableCors()

    await app.listen(port)
    console.log(`listening to port ${port}`)
}

bootstrap()
