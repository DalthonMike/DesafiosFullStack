import { Component, OnInit } from '@angular/core';
import { DialogService } from "primeng/dynamicdialog";
import { BolsistaService } from "../../service/bolsista.service";

import {
    ModalCadastroBolsistaComponent
} from "../modals/Bolsista/modal-cadastro-bolsista/modal-cadastro-bolsista.component";
import {
    ModalVisualizacaoBolsistaComponent
} from "../modals/Bolsista/modal-visualizacao-bolsista/modal-visualizacao-bolsista.component";
import { ModalEdicaoBolsistaComponent } from "../modals/Bolsista/modal-edicao-bolsista/modal-edicao-bolsista.component";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import {ConfirmationService} from "primeng/api";

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
        private router: Router,
        private toastr: ToastrService,
        private confirmationService: ConfirmationService
    ) {
    }

    ngOnInit(): void {
        this.listarTodos();
    }

    listarTodos(): void {
        this.bolsistaService.listarTodos().subscribe(response => {
            this.bolsistas = response
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

    confirmarExclusao(id: number) {
        this.confirmationService.confirm({
            message: 'Deseja realmente excluir o bolsista?',
            header: 'Exclusão',
            icon: 'pi pi-exclamation-triangle',
            accept: () => this.deletar(id),
            reject: () => {},
        });
    }

    deletar(id: number) {
        this.bolsistaService.deletar(id)
            .subscribe(
                () => {
                },
                (error) => {
                    this.toastr.error(error.error.message, error.error.error, {
                        timeOut: 3000,
                        progressBar: true
                    })
                },
                () => {
                    this.listarTodos();
                    this.toastr.success("Exclusão realizada com sucesso!", "success", {
                        timeOut: 3000,
                        progressBar: true
                    })
                }
            )
    }

    verificaSeExistePagamentoPagoOuSolicitado(bolsista: any): boolean {
        return bolsista.pagamentos.some((b: { status: string; }) => b.status === 'SOLICITADO' || b.status === 'PAGO');
    }


    gerenciarPagamentos(bolsista: number): void {

        const objetoSerializado = encodeURIComponent(JSON.stringify(bolsista));
        this.router.navigate(['/lista-pagamento/'], { queryParams: { dados: objetoSerializado }});
    }
}
