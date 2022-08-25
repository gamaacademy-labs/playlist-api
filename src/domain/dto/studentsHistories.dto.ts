import { ApiProperty } from '@nestjs/swagger';

export class StudentsHistoriesDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  contentId: string;
  @ApiProperty()
  studentId: string;
  @ApiProperty()
  isVideoFinished: boolean;
}
