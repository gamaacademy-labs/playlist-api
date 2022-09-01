import { ApiProperty } from '@nestjs/swagger';

export class RatingsContentDTO {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  contentId: string;

  @ApiProperty()
  studentId: string;

  @ApiProperty()
  rating: number;
}
