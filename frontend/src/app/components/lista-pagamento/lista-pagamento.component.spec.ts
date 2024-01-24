import {ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { ListaPagamentoComponent } from './lista-pagamento.component';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { BolsistaService } from "../../service/bolsista.service";
import { HttpClientModule, HttpResponse } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { Confirmation, ConfirmationService } from "primeng/api";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { ModalCadastroPagamentoComponent } from "../modals/pagamento/modal-cadastro-pagamento/modal-cadastro-pagamento.component";
import { of } from "rxjs";
import { StatusPagamentoEnum } from "../../enums/StatusPagamento.enum";
import { ModalEdicaoPagamentoComponent } from "../modals/pagamento/modal-edicao-pagamento/modal-edicao-pagamento.component";
import { ModalVisualizacaoPagamentoComponent } from "../modals/pagamento/modal-visualizacao-pagamento/modal-visualizacao-pagamento.component";
import { PagamentoService } from "../../service/pagamento.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Router } from "@angular/router";

describe('ListaPagamentoComponent', () => {
  let component: ListaPagamentoComponent;
  let fixture: ComponentFixture<ListaPagamentoComponent>;
  let dialogService: DialogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPagamentoComponent],
      providers: [DialogService, BolsistaService, ConfirmationService, ToastrService],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    })
        .compileComponents();
    fixture = TestBed.createComponent(ListaPagamentoComponent);
    component = fixture.componentInstance;
    dialogService = TestBed.inject(DialogService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('apre a ModalCadastroPagamentoComponent', () => {
    const idBolsista = 1;

    spyOn(dialogService, 'open').and.callThrough();
    spyOn(component, 'listarTodosNaoCancelados');

    // Chama o método que contém a lógica para abrir o modal
    component.openModalCadastroPagamento(idBolsista);

    // Verifica se o método open do DialogService foi chamado corretamente
    expect(dialogService.open).toHaveBeenCalledWith(ModalCadastroPagamentoComponent, {
      header: 'Inserir Pagamento',
      width: 'auto',
      height: 'auto',
      modal: true,
      baseZIndex: 10000,
      closeOnEscape: false,
      closable: false,
      data: idBolsista,
    });
  });

  it('abre a modal ModalEdicaoPagamentoComponent para os status válidos', fakeAsync(() => {
    spyOn(dialogService, 'open').and.callThrough();
    spyOn(component, 'listarTodosNaoCancelados');

    const bolsista = {idBolsista: 1};
    const statusPagamento = StatusPagamentoEnum.SOLICITADO;

    component.openModalEditarPagamento(bolsista, statusPagamento);

    expect(dialogService.open).toHaveBeenCalled();

    const args = (dialogService.open as jasmine.Spy).calls.mostRecent().args;

    const componentType = args[0];
    expect(componentType).toBe(ModalEdicaoPagamentoComponent);

    const config = args[1];
    expect(config.header).toBe('Editar Pagamento');

    tick();
  }));

  it('exibe a mensagem de erro toastr para os status inválidos', () => {
    let toastrService = TestBed.inject(ToastrService);

    spyOn(dialogService, 'open');
    spyOn(toastrService, 'error');

    const bolsista = {idBolsista: 1};
    const statusPagamento = StatusPagamentoEnum.PAGO;

    component.openModalEditarPagamento(bolsista, statusPagamento);
  });

  it('teste para abrir ModalVisualizacaoPagamentoComponent', fakeAsync(() => {
    spyOn(dialogService, 'open').and.callThrough();

    const pagamentos = [
      {
        "id": 1,
        "idBolsista": 1,
        "dataPagamento": [2022, 1, 10],
        "valor": 1000.00,
        "status": "NAO_REALIZADO"
      },
    ];

    component.visualizar(pagamentos);

    expect(dialogService.open).toHaveBeenCalled();

    const args = (dialogService.open as jasmine.Spy).calls.mostRecent().args;

    const componentType = args[0];
    expect(componentType).toBe(ModalVisualizacaoPagamentoComponent);

    const config = args[1];
    expect(config.header).toBe('Visualizar Bolsista');
  }));

  it('teste de chamada para deletar', fakeAsync(() => {
    const id = 1;
    let toastrService = TestBed.inject(ToastrService);
    let pagamentoService = TestBed.inject(PagamentoService);

    spyOn(pagamentoService, 'deletar').and.returnValue(of(new HttpResponse({body: {}, status: 200})));
    spyOn(toastrService, 'success');

    component.dadosBolsista = {
      "id": 1,
      "idBolsista": 1,
      "dataPagamento": [
        2022,
        1,
        10
      ],
      "valor": 1000.00,
      "status": "NAO_REALIZADO"
    };
    tick();
  }));

  it('teste do método de listarPagamentosPorBolsistaId', fakeAsync(() => {

    let pagamentoService = TestBed.inject(PagamentoService);
    const mockResponse = {
      body: {
        pagamentos: [
          {
            id: 1,
            idBolsista: 1,
            dataPagamento: new Date('2024-01-23T16:42:16'),
            valor: 1000,
            status: 'NAO_REALIZADO'
          }
        ]
      }
    };

    spyOn(pagamentoService, 'listarPagamentosPorBolsistaId').and.returnValue(of(new HttpResponse(mockResponse)));

    component.listarPagamentosPorBolsistaId(1);

    tick();

    expect(component.pagamentos).toEqual(mockResponse.body.pagamentos);

    fixture.detectChanges();
  }));

  it('teste da chamada para pagamentos não cancelados do bolsista', fakeAsync(() => {
    let pagamentoService = TestBed.inject(PagamentoService);

    const mockResponse = {
      body: [
        {
          id: 1,
          idBolsista: 1,
          dataPagamento: new Date('2024-01-23T16:42:16'),
          valor: 1000,
          status: 'NAO_REALIZADO'
        }
      ]
    };

    spyOn(pagamentoService, 'listarTodosNaoCancelados').and.returnValue(of(new HttpResponse(mockResponse)));

    component.listarTodosNaoCancelados(1);

    tick();

    expect(component.pagamentos).toEqual(mockResponse.body);

    fixture.detectChanges();
  }));

  it('chamada para navegação para a rota /lista-bolsista', fakeAsync(() => {
    let router = TestBed.inject(Router);

    spyOn(router, 'navigate');

    component.voltar();

    tick();

    expect(router.navigate).toHaveBeenCalledWith(['/lista-bolsista']);
  }));

  it('retorna success para o status PAGO', () => {
    const result = component.getSeverity('PAGO');
    expect(result).toBe('success');
  });

  it('retorna warning para o status NAO_REALIZADO', () => {
    const result = component.getSeverity('NAO_REALIZADO');
    expect(result).toBe('warning');
  });

  it('retorna danger para o status CANCELADO', () => {
    const result = component.getSeverity('CANCELADO');
    expect(result).toBe('danger');
  });

  it('chamada do confirmationService.confirm para deletar quando for accept', () => {
    let confirmationService = TestBed.inject(ConfirmationService);

    spyOn(confirmationService, 'confirm').and.callFake((options: Confirmation) => {
      if (options && options.accept) {
        return options.accept();
      } else {
        fail('options.acepted');
      }

      return ConfirmationService;
    });

    spyOn(component, 'deletar');

    const id = 1;
    component.confirmarExclusao(id);

    expect(confirmationService.confirm).toHaveBeenCalled();
    // expect(component.deletar).not.toHaveBeenCalled();
  });

  it('chamada do confirmationService.rejected para não deletar quando for rejected', () => {
    let confirmationService = TestBed.inject(ConfirmationService);

    spyOn(confirmationService, 'confirm').and.callFake((options: Confirmation) => {
      if (options && options.reject) {
        return options.reject();
      } else {
        fail('Options or options.reject is undefined');
      }

      return ConfirmationService;
    });

    spyOn(component, 'deletar');

    const id = 1;
    component.confirmarExclusao(id);

    expect(confirmationService.confirm).toHaveBeenCalled();
    expect(component.deletar).not.toHaveBeenCalled();
  });
});
