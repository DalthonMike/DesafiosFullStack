import { Component, OnInit } from '@angular/core';
import { DialogService } from "primeng/dynamicdialog";
import { BolsistaService } from "../../service/bolsista.service";

import { ModalVisualizacaoBolsistaComponent } from "../modals/Bolsista/modal-visualizacao-bolsista/modal-visualizacao-bolsista.component";
import { ModalEdicaoBolsistaComponent } from "../modals/Bolsista/modal-edicao-bolsista/modal-edicao-bolsista.component";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalCadastroPagamentoComponent } from "../modals/pagamento/modal-cadastro-pagamento/modal-cadastro-pagamento.component";

@Component({
  selector: 'app-lista-pagamento',
  templateUrl: './lista-pagamento.component.html',
  styleUrls: ['./lista-pagamento.component.css'],
})
export class ListaPagamentoComponent implements OnInit {

  dadosBolsista: any;

  constructor(
      private dialogService: DialogService,
      private bolsistaService: BolsistaService,
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
  }

  adicionarPagamento() {
    this.dialogService.open(ModalCadastroPagamentoComponent, {
      header: 'Inserir Pagamento',
      width: 'auto',
      height: 'auto',
      modal: true,
      baseZIndex: 10000,
      closeOnEscape: false,
      closable: false,
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
      //(data) irá enviar o id do bolsista para consulta da visualização;
      data: id,
    });
  }

  visualizar(id: any) {
    this.dialogService.open(ModalVisualizacaoBolsistaComponent, {
      header: 'Visualizar Bolsista',
      width: 'auto',
      height: 'auto',
      modal: true,
      baseZIndex: 10000,
      closeOnEscape: true,
      closable: true,
      //(data) irá enviar o id do bolsista para consulta da visualização;
      data: id,
    });
  }

  deletar(id: number) {
    this.bolsistaService.deletar(id).subscribe(response => {

    });
  }
}
