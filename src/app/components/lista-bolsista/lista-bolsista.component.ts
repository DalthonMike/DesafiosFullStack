import { Component, OnInit } from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-lista-bolsista',
  templateUrl: './lista-bolsista.component.html',
  styleUrls: ['./lista-bolsista.component.css']
})
export class ListaBolsistaComponent implements OnInit {
  pessoa: any;
  displayModal: any;

  constructor() { }

  ngOnInit(): void {
    this.pessoa = pessoas;
  }

  editar(pessoa: any) {
    
  }

  controleModal(e: any) {
    if (e == true) {
      this.displayModal = true;
    } else if (e == false) {
      this.displayModal = false;
    }
  }

  salvar() {

  }
}

interface Pessoa {
  nome: string;
  tipoIdentificador: string;
  numeroIdentificador: string;
  dadosBancarios: string;
  dataCadastro: string;
}

let pessoas: Pessoa[] = [
  { nome: "Bruno Mikael Rodrigues Pereira", tipoIdentificador: "CPF", numeroIdentificador: "61 981812342", dadosBancarios: "Banco do Brasil - 1234/1234-5", dataCadastro: "11/01/2024" },
  { nome: "Dalthon Mike Rodrigues Dias", tipoIdentificador: "CPF", numeroIdentificador: "61 40028922", dadosBancarios: "Banco do Brasil - 1234/1234-5", dataCadastro: "03/01/2024" },
  { nome: "Vinicius Henrique Araujo Torres", tipoIdentificador: "CPF", numeroIdentificador: "61 993331635", dadosBancarios: "Banco do Brasil - 1234/1234-5", dataCadastro: "07/01/2024" },
];
