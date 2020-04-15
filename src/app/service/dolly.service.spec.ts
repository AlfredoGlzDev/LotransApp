import { TestBed } from '@angular/core/testing';

import { DollyService } from './dolly.service';

describe('DollyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DollyService = TestBed.get(DollyService);
    expect(service).toBeTruthy();
  });
});
