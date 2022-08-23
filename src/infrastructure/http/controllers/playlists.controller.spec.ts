import { Test, TestingModule } from '@nestjs/testing';

import { PlaylistsService } from '../../modules/playlists/playlists.service';
import { PlaylistsController } from './playlists.controller';

describe('PlaylistsController', () => {
  let controller: PlaylistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaylistsController],
      providers: [PlaylistsService],
    }).compile();

    controller = module.get<PlaylistsController>(PlaylistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
