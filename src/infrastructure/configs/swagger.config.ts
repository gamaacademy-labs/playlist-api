import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Gama Lab Playlist Service API.')
  .setVersion('1.0')
  .addBearerAuth()
  .setDescription(
    'This is the documentation of the API consumed by the Gama Lab Playlist frontend app',
  )
  .build();
