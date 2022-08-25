import { PlaylistsRepository } from 'src/infrastructure/database/repositories/playlists.repository';

export class FindOnePlaylistUsecase {
  constructor(private readonly playlistsRepository: PlaylistsRepository) {}

  async execute(title: string) {
    return this.playlistsRepository.findOne(title);
  }
}
