import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentPlaylistDTO {
  @ApiProperty()
  playlistId: string;
  @ApiProperty()
  studentId: string;
}
