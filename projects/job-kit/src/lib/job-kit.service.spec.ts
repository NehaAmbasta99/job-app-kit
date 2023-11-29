import { TestBed } from '@angular/core/testing';

import { JobKitService } from './job-kit.service';

describe('JobKitService', () => {
  let service: JobKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
