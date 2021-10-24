import { Test, TestingModule } from '@nestjs/testing';
import { CustomSchedulerService } from './custom-scheduler.service';

describe('CustomSchedulerService', () => {
  let service: CustomSchedulerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomSchedulerService],
    }).compile();

    service = module.get<CustomSchedulerService>(CustomSchedulerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
