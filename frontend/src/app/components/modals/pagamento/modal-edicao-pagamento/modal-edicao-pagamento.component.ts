import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { PagamentoModel } from "../../../../model/pagamento.model";
import { PagamentoService } from "../../../../service/pagamento.service";
import { StatusPagamentoEnum } from "../../../../enums/StatusPagamento.enum";

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
    private dataPagamanto: any;
    private valor: any;

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
        this.processarDados();

        this.listarStatusPagamento(this.resource?.status);

        console.log('dadosPagamento', this.resource);
    }

    private processarDados() {
        this.resource = this.dialogConfig.data;
        this.idBolsista = this.dialogConfig.data?.idBolsista;
        this.idPagamento = this.dialogConfig.data?.id;
        this.dataPagamanto = this.dialogConfig.data?.dataPagamento;
        this.valor = this.dialogConfig.data?.valor;
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
        this.resource.dataPagamento = new Date(this.dataPagamanto);
        this.resource.valor = this.valor;

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
            case StatusPagamentoEnum.NAO_REALIZADO:
                this.statusPagamento = this.statusPagamento.filter((status: StatusPagamentoEnum) => status !== StatusPagamentoEnum.PAGO && status !== StatusPagamentoEnum.NAO_REALIZADO);
                break;

            case StatusPagamentoEnum.SOLICITADO:
                this.statusPagamento = this.statusPagamento.filter((status: StatusPagamentoEnum) => status !== StatusPagamentoEnum.SOLICITADO && status !== StatusPagamentoEnum.NAO_REALIZADO);
        }
    }
}
