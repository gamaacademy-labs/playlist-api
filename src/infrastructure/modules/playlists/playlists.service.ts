import { PrismaProvider } from './../../database/providers/prisma.provider';
import { PlaylistsDTO } from '../../../domain/dto/playlists.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaylistsService {

  constructor(private prisma: PrismaProvider) {}
  
  async create(data: PlaylistsDTO) {
    const playlistExists = await this.prisma.playlists.findFirst({
      where: {
        title: data.title,
      },
    });

    if (playlistExists) {
      throw new Error('Playlist already exists');
    }

    const playlist = await this.prisma.playlists.create({
      data,
    });

    return playlist;
  }

  async findAll() {
    return this.prisma.playlists.findMany();
  }

  async update(id: string, data: PlaylistsDTO) {
    const playlistExists = await this.prisma.playlists.findUnique({
      where: {
        id,
      }
    });

    if (!playlistExists) {
      throw new Error('Playlist does not exists!');
    }

    return await this.prisma.playlists.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string){
    const playlistExists = await this.prisma.playlists.findUnique({
      where: {
        id,
      }
    });

    if (!playlistExists) {
      throw new Error('Playlist does not exists!');
    }

    return await this.prisma.playlists.delete({
      where: {
        id,
      },
    });
  }
}
