import { ApiProperty } from '@nestjs/swagger';

export class RatingsPlaylistDTO {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  contentsId: string;

  @ApiProperty()
  playlistId: string;

  @ApiProperty()
  rating: number;
}
