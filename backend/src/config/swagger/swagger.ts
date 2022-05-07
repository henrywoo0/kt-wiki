import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setUpSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle('경태위키')
    .setDescription('kt wiki for 6th 1-3')
    .setVersion('0.0.0')
    .addTag('wiki')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-docs', app, document);
};
