import { PlaylistWithContentDTO } from 'src/domain/dto/playlist-with-content.dto';
import { PlaylistsRepository } from 'src/infrastructure/database/repositories/playlists.repository';

export class FindOnePlaylistUsecase {
  constructor(private readonly playlistsRepository: PlaylistsRepository) {}

  async execute(title: string) {
    const playlist = await this.playlistsRepository.findOne(title);

    const playlistWithContent = new PlaylistWithContentDTO(playlist);

    return playlistWithContent;
  }
}
