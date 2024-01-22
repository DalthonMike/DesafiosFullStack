import { TestBed } from '@angular/core/testing';

import { PagamentoService } from './pagamento.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('PagamentoService', () => {
  let service: PagamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagamentoService],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(PagamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
