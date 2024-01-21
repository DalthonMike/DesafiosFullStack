import { Component, OnInit } from '@angular/core';
import { DialogService } from "primeng/dynamicdialog";
import { BolsistaService } from "../../service/bolsista.service";

import { ModalCadastroBolsistaComponent } from "../modals/Bolsista/modal-cadastro-bolsista/modal-cadastro-bolsista.component";
import { ModalVisualizacaoBolsistaComponent } from "../modals/Bolsista/modal-visualizacao-bolsista/modal-visualizacao-bolsista.component";
import { ModalEdicaoBolsistaComponent } from "../modals/Bolsista/modal-edicao-bolsista/modal-edicao-bolsista.component";

@Component({
  selector: 'app-lista-bolsista',
  templateUrl: './lista-bolsista.component.html',
  styleUrls: ['./lista-bolsista.component.css'],
})
export class ListaBolsistaComponent implements OnInit {

  bolsista: any;
  bolsistas: any[] = []

  constructor(
      private dialogService: DialogService,
      private bolsistaService: BolsistaService,
  ) {
  }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    this.bolsistaService.listarTodos().subscribe(response => {
      this.bolsistas = response
      console.log(this.bolsistas);
    })
  }

  openModalCadastroBolsista() {
    this.dialogService.open(ModalCadastroBolsistaComponent, {
      header: 'Inserir Bolsista',
      width: 'auto',
      height: 'auto',
      modal: true,
      baseZIndex: 10000,
      closeOnEscape: false,
      closable: false,
    }).onClose.subscribe(() => {
      this.listarTodos();
    });
  }

  editar(id: any) {
    this.dialogService.open(ModalEdicaoBolsistaComponent, {
      header: 'Editar Bolsista',
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

  verificaSeExistePagamentoPagoOuSolicitado(bolsista: any): boolean {
    return bolsista.pagamentos.some((b: { status: string; }) => b.status === 'SOLICITADO' || b.status === 'PAGO');
  }

}
