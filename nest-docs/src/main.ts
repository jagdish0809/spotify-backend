import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  // Set up the Nest-Express Application
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { abortOnError: false })
  await app.listen(3000)
}
bootstrap()
