import { ApiProperty } from '@nestjs/swagger';
import { PlaylistContentWithRelationsDTO } from './playlist-content-with-relations.dto';

export class PlaylistsWithRelationsDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  level: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  contents: PlaylistContentWithRelationsDTO[];
}
