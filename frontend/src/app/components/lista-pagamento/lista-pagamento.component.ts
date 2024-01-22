import { Component, OnInit } from '@angular/core';
import { DialogService } from "primeng/dynamicdialog";

import { ModalEdicaoBolsistaComponent } from "../modals/Bolsista/modal-edicao-bolsista/modal-edicao-bolsista.component";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalCadastroPagamentoComponent } from "../modals/pagamento/modal-cadastro-pagamento/modal-cadastro-pagamento.component";
import { PagamentoModel } from "../../model/pagamento.model";
import { PagamentoService } from "../../service/pagamento.service";
import { ModalVisualizacaoPagamentoComponent } from "../modals/pagamento/modal-visualizacao-pagamento/modal-visualizacao-pagamento.component";

@Component({
  selector: 'app-lista-pagamento',
  templateUrl: './lista-pagamento.component.html',
  styleUrls: ['./lista-pagamento.component.css'],
})
export class ListaPagamentoComponent implements OnInit {

  dadosBolsista: any;
  pagamentos: PagamentoModel[] = [];

  constructor(
      private dialogService: DialogService,
      private pagamentoService: PagamentoService,
      private router: Router,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const objetoSerializado = params['dados'];
      this.dadosBolsista = JSON.parse(decodeURIComponent(objetoSerializado));

      console.log("dadosBolsista", this.dadosBolsista);
    });

    this.listarPagamentosPorBolsistaId(this.dadosBolsista?.id);
  }

  openModalCadastroPagamento(idBolsista: number) {
    this.dialogService.open(ModalCadastroPagamentoComponent, {
      header: 'Inserir Pagamento',
      width: 'auto',
      height: 'auto',
      modal: true,
      baseZIndex: 10000,
      closeOnEscape: false,
      closable: false,
      data: idBolsista,
    }).onDestroy.subscribe(() => {
      this.listarPagamentosPorBolsistaId(idBolsista);
    });
  }

  editar(id: any) {
    this.dialogService.open(ModalEdicaoBolsistaComponent, {
      header: 'Editar Pagamento',
      width: 'auto',
      height: 'auto',
      modal: true,
      baseZIndex: 10000,
      closeOnEscape: true,
      closable: true,
      data: id,
    });
  }

  visualizar(pagamentos: any) {
    this.dialogService.open(ModalVisualizacaoPagamentoComponent, {
      header: 'Visualizar Bolsista',
      width: 'auto',
      height: 'auto',
      modal: true,
      baseZIndex: 10000,
      closeOnEscape: true,
      closable: true,
      data: pagamentos,
    });
  }

  deletar(id: number) {
    this.pagamentoService.deletar(id).subscribe(response => {

    });
  }

  listarTodos(): void {
    this.pagamentoService.listarTodos().subscribe(response => {
      this.pagamentos = response;
    })
  }

  listarPagamentosPorBolsistaId(idBolsista: number): any {
    this.pagamentoService.listarPagamentosPorBolsistaId(idBolsista).subscribe(response => {
      this.pagamentos = response.body.pagamentos;
    });
  }
}
