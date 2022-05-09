import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setUpSwagger } from './config/swagger/swagger';
import { HttpExceptionFilter } from './global/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT: number = app.get(ConfigService).get('PORT');
  setUpSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(PORT);
}
bootstrap();
