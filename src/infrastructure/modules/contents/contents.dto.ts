import { ApiProperty } from "@nestjs/swagger";

export class ContentsDTO {
    @ApiProperty()
    id?: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    thumbnail: string;
    @ApiProperty()
    linkVideo: string;
    @ApiProperty()
    createdAt: string;
    @ApiProperty()
    updatedAt: string;
    // ratingsVideos: Array<number>;
    // playlists: Array<string>;
};