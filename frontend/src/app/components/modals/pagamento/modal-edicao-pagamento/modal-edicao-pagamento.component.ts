import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { PagamentoModel } from "../../../../model/pagamento.model";
import { PagamentoService } from "../../../../service/pagamento.service";

@Component({
    selector: 'app-modal-edicao-pagamento',
    templateUrl: './modal-edicao-pagamento.component.html',
    styleUrls: ['./modal-edicao-pagamento.component.css'],
    providers: [ToastrService],
})
export class ModalEdicaoPagamentoComponent implements OnInit {

    public resource = new PagamentoModel();
    private idBolsista: number;
    private idPagamento: number;

    statusPagamento: any;

    constructor(
        private pagamentoService: PagamentoService,
        private dialogService: DialogService,
        private toastr: ToastrService,
        private router: Router,
        private dialogRef: DynamicDialogRef,
        private dialogConfig: DynamicDialogConfig,
        ) {
    }

    ngOnInit(): void {
        this.resource = this.dialogConfig.data;
        this.idBolsista = this.dialogConfig.data?.idBolsista;
        this.idPagamento = this.dialogConfig.data?.id;

        this.listarStatusPagamento(this.resource?.status);

        console.log('dadosPagamento', this.resource);
    }

    onSubmit(pagamentoForm: NgForm) {

        if (pagamentoForm.valid) {
            this.salvar(pagamentoForm);
        } else {
            pagamentoForm.form["controls"]["status"].markAsDirty();
            pagamentoForm.form["controls"]["status"].markAsDirty();
            pagamentoForm.form["controls"]["valor"].markAsDirty();
        }
    }

    salvar(pagamentoForm: NgForm) {

        this.resource = pagamentoForm.value;
        this.resource.idBolsista = this.idBolsista;
        this.resource.id = this.idPagamento;
        let partes = pagamentoForm.value.dataPagamento.split('/');
        this.resource.dataPagamento = new Date(partes[2], partes[1] - 1, partes[0]);

        this.pagamentoService.editar(this.resource).subscribe(response => {
            if (response.status == 204) {
                this.dialogRef.close({ salvamentoConfirmado: true });
                this.toastr.success("Edição realizado com sucesso!", "success", {
                    timeOut: 3000,
                    progressBar: true
                });
            }
        });
    }

    listarStatusPagamento(status: string): void {
        this.pagamentoService.listarStatusPagamento().subscribe(response => {
            this.statusPagamento = response;

            if (this.statusPagamento) {
                this.verificarStatusDisponiveis(status);
            }
        });
    }

    cancelar() {
        this.dialogRef.destroy();
    }

    private verificarStatusDisponiveis(statusAtual: string) {

        switch (statusAtual) {
            case StatusPagamento.NAO_REALIZADO:
                this.statusPagamento = this.statusPagamento.filter((status: StatusPagamento) => status !== StatusPagamento.PAGO && status !== StatusPagamento.NAO_REALIZADO);
                break;
        }
    }
}

enum StatusPagamento {
    NAO_REALIZADO = 'NAO_REALIZADO',
    PAGO = 'PAGO',
    SOLICITADO = 'SOLICITADO',
    CANCELADO = 'CANCELADO',
}
