import { TestBed } from '@angular/core/testing';

import { RemolqueService } from './remolque.service';

describe('RemolqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemolqueService = TestBed.get(RemolqueService);
    expect(service).toBeTruthy();
  });
});
