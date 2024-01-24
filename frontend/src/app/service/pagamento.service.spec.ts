import {inject, TestBed} from '@angular/core/testing';

import { PagamentoService } from './pagamento.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PagamentoModel } from "../model/pagamento.model";

describe('PagamentoService', () => {
    let service: PagamentoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PagamentoService],
            imports: [HttpClientTestingModule],
        });

        service = TestBed.inject(PagamentoService);
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

    it('retorna uma lista de Pagamentos pelo método listarTodos ', inject([PagamentoService], (pagamentoService: PagamentoService) => {
        const mockData: jasmine.Expected<jasmine.ArrayLike<any>> = [
            {
                "id": 1,
                "idBolsista": 1,
                "dataPagamento": [2022, 1, 10],
                "valor": 1000.00,
                "status": "NAO_REALIZADO"
            },
            {
                "id": 8,
                "idBolsista": 1,
                "dataPagamento": [2024, 1, 10],
                "valor": 3000.00,
                "status": "NAO_REALIZADO"
            }
        ];

        pagamentoService.listarTodos().subscribe(data => {
            expect(data).toEqual(mockData);
        });

        const req = httpMock.expectOne(`${pagamentoService.pathBase}/pagamento/todos`);
        expect(req.request.method).toEqual('GET');

        req.flush(mockData);
    }));

    it('teste para chamada POST para cadastrar pagamento', inject([PagamentoService], (pagamentoService: PagamentoService) => {
        const formData: PagamentoModel = {
            id: 0,
            idBolsista: 1,
            dataPagamento: new Date(),
            valor: 1000,
            status: 'PAGO',
        };

        pagamentoService.cadastro(formData).subscribe(response => {
            expect(response.status).toEqual(200);
        });

        const req = httpMock.expectOne(`${pagamentoService.pathBase}/pagamento/cadastrar`);
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual(formData);

        req.flush({status: 200});
    }));

    it('retorna uma lista de Pagamentos pelo método listarTodos ', inject([PagamentoService], (pagamentoService: PagamentoService) => {
        const mockData: PagamentoModel = {
            "id": 1,
            "idBolsista": 2,
            "dataPagamento": new Date(),
            "valor": 100000,
            "status": "PAGO"
        };

        pagamentoService.editar(mockData).subscribe(response => {
            expect(response.status).toEqual(200);
        });

        const req = httpMock.expectOne(`${pagamentoService.pathBase}/pagamento/editar`);
        expect(req.request.method).toEqual('POST');

        req.flush(mockData);
    }));

    it('should send a GET request to listarPagamentosPorBolsistaId', inject([PagamentoService], (pagamentoService: PagamentoService) => {
      const idBolsista = 1;

      pagamentoService.listarPagamentosPorBolsistaId(idBolsista).subscribe(response => {
        expect(response.status).toEqual(200);
      });

      const req = httpMock.expectOne(`${pagamentoService.pathBase}/bolsista/${idBolsista}`);
      expect(req.request.method).toEqual('GET');

      req.flush({status: 200, data: { /* ...dados do pagamento... */}});
    }));

    it('Requisição do tipo DELETE para deletar pagamento', inject([PagamentoService], (pagamentoService: PagamentoService) => {
        const bolsistaId = 1;

        pagamentoService.deletar(bolsistaId).subscribe(response => {
            expect(response.status).toEqual(204);
        });

        const req = httpMock.expectOne(`${pagamentoService.pathBase}/pagamento/${bolsistaId}`);
        expect(req.request.method).toEqual('DELETE');
    }));
});
