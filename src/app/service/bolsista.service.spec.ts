import { TestBed } from '@angular/core/testing';

import { BolsistaService } from './bolsista.service';

describe('BolsistaService', () => {
  let service: BolsistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolsistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
