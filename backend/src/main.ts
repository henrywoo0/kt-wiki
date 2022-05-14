import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setUpSwagger } from './config/swagger/swagger';
import { ErrorFilter } from './global/filters/http-exception.filter';
import { LoggingInterceptor } from './global/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT: number = app.get(ConfigService).get('PORT');
  setUpSwagger(app);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ErrorFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(PORT);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
