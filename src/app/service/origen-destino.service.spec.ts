import { TestBed } from '@angular/core/testing';

import { OrigenDestinoService } from './origen-destino.service';

describe('OrigenDestinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrigenDestinoService = TestBed.get(OrigenDestinoService);
    expect(service).toBeTruthy();
  });
});
