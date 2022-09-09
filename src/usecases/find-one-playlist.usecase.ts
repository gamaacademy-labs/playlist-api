import { PlaylistWithContentDTO } from '../domain/dto/playlist-with-content.dto';
import { PlaylistsRepository } from '../infrastructure/database/repositories/playlists.repository';

export class FindOnePlaylistUsecase {
  constructor(private readonly playlistsRepository: PlaylistsRepository) {}

  async execute(title: string) {
    const playlist = await this.playlistsRepository.findOne(title);

    return playlist;
  }
}
