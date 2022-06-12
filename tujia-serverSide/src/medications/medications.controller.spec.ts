import { Test, TestingModule } from '@nestjs/testing';
// import { MedicationsController } from './medications.controller';
import { MedicationsController } from 'src/medications/medications.controller';
import { MedicationsService } from 'src/medications/medications.service';

describe('MedicationsController', () => {
  let controller: MedicationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicationsController],
      providers: [MedicationsService],
    }).compile();

    controller = module.get<MedicationsController>(MedicationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
