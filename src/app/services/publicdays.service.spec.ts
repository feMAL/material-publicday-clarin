import { TestBed } from '@angular/core/testing';

import { PublicdaysService } from './publicdays.service';

describe('PublicdaysService', () => {
  let service: PublicdaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicdaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
