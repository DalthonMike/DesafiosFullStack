import { inject, TestBed } from '@angular/core/testing';

import { BolsistaService } from './bolsista.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BolsistaModel } from "../model/bolsista.model";

describe('BolsistaService', () => {
  let service: BolsistaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BolsistaService],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(BolsistaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('retorna uma string vazia para getPathPageable()', () => {
    const resultado = service.getPathPageable();
    expect(resultado).toBeDefined();
    expect(resultado).toEqual('');
  });

  it('retorna uma lista de Bolsistass pelo método listarTodos ', inject([BolsistaService], (bolsistaService: BolsistaService) => {
    const mockData: jasmine.Expected<jasmine.ArrayLike<any>> = [
      {
        "id": 1,
        "nome": "Fulano",
        "dataCadastro": [2022, 1, 1],
        "numeroAgencia": 1234,
        "numeroConta": 56789,
        "identificador": "CPF",
        "banco": "BANCO_DO_BRASIL",
        "numeroIdentificador": 12345678901,
        "pagamentos": [
          {
            "id": 1,
            "idBolsista": 1,
            "dataPagamento": [2022, 1, 10],
            "valor": 1000.00,
            "status": "NAO_REALIZADO"
          },
          {
            "id": 2,
            "idBolsista": 1,
            "dataPagamento": [2022, 1, 15],
            "valor": 1500.00,
            "status": "CANCELADO"
          }
        ],
        "atividade": "ATIVO"
      },
    ];

    bolsistaService.listarTodos().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(`${bolsistaService.pathBase}/bolsista/todos`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockData);
  }));

  it('teste para chamada POST para cadastrar bolsista', inject([BolsistaService], (bolsistaService: BolsistaService) => {
    const formData: BolsistaModel = {
      id: 1,
      codigoBanco: 1234,
      nome: 'Registro teste',
      numeroAgencia: 3214213,
      numeroConta: 4123124,
      identificador: 'CPF',
      banco: 'BRADESCO',
      numeroIdentificador: 20294891379,
      dataCadastro: new Date(),
    };

    bolsistaService.cadastro(formData).subscribe(response => {
      expect(response.status).toEqual(200); // Ajuste conforme o status esperado da resposta
    });

    const req = httpMock.expectOne(`${bolsistaService.pathBase}/bolsista/cadastrar`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(formData); // Verifica se o corpo da solicitação é o esperado

    req.flush({ status: 200 });
  }));

  it('Requisição do tipo POST para buscar bolsista pelo método buscarPorId', inject([BolsistaService], (bolsistaService: BolsistaService) => {
    const bolsistaId = 1;

    bolsistaService.buscarPorId(bolsistaId).subscribe(response => {
      expect(response.status).toEqual(200);
    });

    const req = httpMock.expectOne(`${bolsistaService.pathBase}/bolsista/${bolsistaId}`);
    expect(req.request.method).toEqual('POST');

    req.flush({ status: 200, data: {
        id: 1,
        codigoBanco: 1234,
        nome: 'Registro teste',
        numeroAgencia: 3214213,
        numeroConta: 4123124,
        identificador: 'CPF',
        banco: 'BRADESCO',
        numeroIdentificador: 20294891379,
        dataCadastro: new Date(),
      } });
  }));

  it('Requisição do tipo DELETE para deletar bolsista deletar', inject([BolsistaService], (bolsistaService: BolsistaService) => {
    const bolsistaId = 1;

    bolsistaService.deletar(bolsistaId).subscribe(response => {
      expect(response.status).toEqual(204);
    });

    const req = httpMock.expectOne(`${bolsistaService.pathBase}/bolsista/${bolsistaId}`);
    expect(req.request.method).toEqual('DELETE');
  }));
});
