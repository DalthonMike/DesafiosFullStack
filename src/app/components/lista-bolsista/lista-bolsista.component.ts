import { Component, OnInit } from '@angular/core';
import { DialogService } from "primeng/dynamicdialog";
import { BolsistaService } from "../../service/bolsista.service";

import { ModalCadastroBolsistaComponent } from "../modals/Bolsista/modal-cadastro-bolsista/modal-cadastro-bolsista.component";
import { BolsistaModel } from "../../model/bolsista.model";

@Component({
  selector: 'app-lista-bolsista',
  templateUrl: './lista-bolsista.component.html',
  styleUrls: ['./lista-bolsista.component.css'],
})
export class ListaBolsistaComponent implements OnInit {

  bolsista: any;

  constructor(
      private dialogService: DialogService,
      private bolsistaService: BolsistaService,
  ) {
  }

  ngOnInit(): void {
    this.bolsista = pessoas;
  }

  adicionarBolsista() {
    this.dialogService.open(ModalCadastroBolsistaComponent, {
      header: 'Inserir Bolsista',
      width: '35vw',
      height: '40vw',
      modal: true,
      baseZIndex: 10000,
      closeOnEscape: false,
      closable: false,
    });
  }

  editar(id: any) {

  }
}

let pessoas: BolsistaModel[] = [
  {
    nome: "Bruno Mikael Rodrigues Pereira",
    tipoIdentificador: "CPF",
    numeroIdentificador: "61 981812342",
    banco: "Banco do Brasil",
    agencia: "1234",
    conta: "1234-5",
    dataCadastro: "11/01/2024"
  },
  {
    nome: "Dalthon Mike Rodrigues Dias",
    tipoIdentificador: "CPF",
    numeroIdentificador: "61 40028922",
    banco: "Banco do Brasil",
    agencia: "1234",
    conta: "1234-5",
    dataCadastro: "03/01/2024"
  },
  {
    nome: "Vinicius Henrique Araujo Torres",
    tipoIdentificador: "CPF",
    numeroIdentificador: "61 993331635",
    banco: "Banco do Brasil",
    agencia: "1234",
    conta: "1234-5",
    dataCadastro: "07/01/2024"
  },
];
