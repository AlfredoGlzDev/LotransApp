import { TestBed } from '@angular/core/testing';

import { TractorsService } from './tractors.service';

describe('TractorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TractorsService = TestBed.get(TractorsService);
    expect(service).toBeTruthy();
  });
});
