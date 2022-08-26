import { PlaylistWithContentDTO } from '../domain/dto/playlist-with-content.dto';
import { FindOnePlaylistUsecase } from './find-one-playlist.usecase';

describe('FindOnePlaylistUsecase', () => {
  const playlist = {
    id: '1',
  } as PlaylistWithContentDTO;

  const fakePlaylistRepository = {
    findOne: jest.fn(() => Promise.resolve(playlist)),
  } as any;

  it('should be defined', () => {
    const findOnePlaylistUsecase = new FindOnePlaylistUsecase(
      fakePlaylistRepository,
    );

    expect(findOnePlaylistUsecase).toBeDefined();
  });

  it('should be able to find one playlist', async () => {
    // Montar  a classe que tu testando
    const findOnePlaylistUsecase = new FindOnePlaylistUsecase(
      // tu tem que passar o que ela pede no constructor so que mockado => fake
      fakePlaylistRepository,
    );

    // executar o test
    const result = await findOnePlaylistUsecase.execute('title-fake');

    // fazer com que ele quqbre caso n satisfaça alguma expectativa
    expect(fakePlaylistRepository.findOne).toHaveBeenCalled();
    expect(findOnePlaylistUsecase).toBeDefined();
    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(PlaylistWithContentDTO);
    expect(result.id).toBeDefined();
  });
});
