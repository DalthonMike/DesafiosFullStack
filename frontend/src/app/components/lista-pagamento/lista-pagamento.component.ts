import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";

import { ActivatedRoute, Router } from "@angular/router";
import { ModalCadastroPagamentoComponent } from "../modals/pagamento/modal-cadastro-pagamento/modal-cadastro-pagamento.component";
import { PagamentoModel } from "../../model/pagamento.model";
import { PagamentoService } from "../../service/pagamento.service";
import { ModalVisualizacaoPagamentoComponent } from "../modals/pagamento/modal-visualizacao-pagamento/modal-visualizacao-pagamento.component";
import { ModalEdicaoPagamentoComponent } from "../modals/pagamento/modal-edicao-pagamento/modal-edicao-pagamento.component";
import { StatusPagamentoEnum } from "../../enums/StatusPagamento.enum";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-lista-pagamento',
  templateUrl: './lista-pagamento.component.html',
  styleUrls: ['./lista-pagamento.component.css'],
  providers: [ToastrService],
})
export class ListaPagamentoComponent implements OnInit {

  dadosBolsista: any;
  pagamentos: PagamentoModel[] = [];

  statusPagamentoEnum = StatusPagamentoEnum;

  constructor(
      private dialogService: DialogService,
      private pagamentoService: PagamentoService,
      private toastr: ToastrService,
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

  editar(bolsista: any, statusPagamento: any) {
    if (statusPagamento !== StatusPagamentoEnum.PAGO && statusPagamento !== StatusPagamentoEnum.CANCELADO) {
      this.dialogService.open(ModalEdicaoPagamentoComponent, {
        header: 'Editar Pagamento',
        width: 'auto',
        height: 'auto',
        modal: true,
        baseZIndex: 10000,
        closeOnEscape: true,
        closable: true,
        data: bolsista,
      }).onDestroy.subscribe(() => {
        this.listarPagamentosPorBolsistaId(bolsista.idBolsista);
      });
    } else {
      this.toastr.error("Não é possível editar o pagamento com o status (PAGO ou CANCELADO)", "Atenção!", {
        timeOut: 3000,
        progressBar: true
      });
    }
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

  voltar() {
    this.router.navigate(['/lista-bolsista']);
  }

  getSeverity(status: string): any {
    switch (status) {
      case 'PAGO':
        return 'success';
      case 'NAO_REALIZADO':
        return 'warning';
      case 'CANCELADO':
        return 'danger';
    }
  }
}
