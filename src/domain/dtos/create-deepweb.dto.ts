import { ApiProperty } from '@nestjs/swagger';

export class CreateDeepwebDto {
  @ApiProperty()
  creditCardNumber: number;

  @ApiProperty()
  creaditCardSecret: number;
}
