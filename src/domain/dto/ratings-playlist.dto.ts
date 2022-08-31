import { ApiProperty } from '@nestjs/swagger';

export class RatingsPlaylistDTO {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  playlistId: string;

  @ApiProperty()
  studentId: string;

  @ApiProperty()
  rating: number;
}
