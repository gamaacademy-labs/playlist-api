import { Test, TestingModule } from '@nestjs/testing';
import { DeepWebController } from './deep-web.controller';

describe('DeepWebController', () => {
  let controller: DeepWebController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeepWebController],
    }).compile();

    controller = module.get<DeepWebController>(DeepWebController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
