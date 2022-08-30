import { ApiProperty } from '@nestjs/swagger';

export class RatingsContentsDTO {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  contentsId: string;

  @ApiProperty()
  studentId: string;

  @ApiProperty()
  rating: number;
}
