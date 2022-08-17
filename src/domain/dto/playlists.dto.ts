import { ApiProperty } from '@nestjs/swagger';

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
  level: any;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
  // ratings: Array<number>;
  // contents: Array<string>;
}
