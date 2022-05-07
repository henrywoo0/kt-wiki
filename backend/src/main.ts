import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setUpSwagger } from './config/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT: number = app.get(ConfigService).get('PORT');
  setUpSwagger(app);
  await app.listen(PORT);
}
bootstrap();
