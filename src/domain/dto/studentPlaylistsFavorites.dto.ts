import { ApiProperty } from '@nestjs/swagger';

export class StudentsPlaylistsFavoritesDTO {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  playlistId: string;
  @ApiProperty()
  studentId: string;
}
