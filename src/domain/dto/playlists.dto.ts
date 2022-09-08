import { ApiProperty } from '@nestjs/swagger';
import { PlaylistContents, PlaylistsRatings } from '@prisma/client';

import { PlaylistLevelEnum } from './../enums/playlist-level.enum';

export class PlaylistsDTO {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  level: PlaylistLevelEnum;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  ratings: PlaylistsRatings;

  @ApiProperty()
  contents: PlaylistContents;
}
