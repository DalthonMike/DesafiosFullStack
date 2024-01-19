import { TestBed } from '@angular/core/testing';

import { BolsistaService } from './bolsista.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('BolsistaService', () => {
  let service: BolsistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BolsistaService],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(BolsistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
