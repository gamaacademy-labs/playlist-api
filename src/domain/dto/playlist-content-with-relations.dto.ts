import { ApiProperty } from '@nestjs/swagger';
import { ContentsDTO } from './contents.dto';

export class PlaylistContentWithRelationsDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  playlistId: string;

  @ApiProperty()
  contentId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  content: ContentsDTO;
}
