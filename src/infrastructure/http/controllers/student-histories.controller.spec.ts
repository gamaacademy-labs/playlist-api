import { Test, TestingModule } from '@nestjs/testing';
import { StudentHistoriesController } from './student-histories.controller';

describe('StudentHistoriesController', () => {
  let controller: StudentHistoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentHistoriesController],
    }).compile();

    controller = module.get<StudentHistoriesController>(StudentHistoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
