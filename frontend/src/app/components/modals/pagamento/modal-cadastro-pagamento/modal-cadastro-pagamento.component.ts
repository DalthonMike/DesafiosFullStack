import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { PagamentoModel } from "../../../../model/pagamento.model";
import { PagamentoService } from "../../../../service/pagamento.service";

@Component({
    selector: 'app-modal-cadastro-pagamento',
    templateUrl: './modal-cadastro-pagamento.component.html',
    styleUrls: ['./modal-cadastro-pagamento.component.css'],
    providers: [ToastrService]
})
export class ModalCadastroPagamentoComponent implements OnInit {

    statusPagamento: String[] = [];

    private idBolsista: any;

    public resource = new PagamentoModel();

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

        this.idBolsista = this.dialogConfig.data;
        this.listarStatusPagamento();
    }

    onSubmit(pagamentoForm: NgForm) {

        if (pagamentoForm.valid) {

            pagamentoForm.value.idBolsista = this.idBolsista;
            this.salvar(pagamentoForm);
        } else {
            pagamentoForm.form["controls"]["dataPagamento"].markAsDirty();
            pagamentoForm.form["controls"]["status"].markAsDirty();
            pagamentoForm.form["controls"]["valor"].markAsDirty();
        }
    }

    salvar(pagamentoForm: NgForm) {

        this.pagamentoService.cadastro(pagamentoForm.value).subscribe(response => {

            if (response.status == 200) {
                this.dialogRef.close({ salvamentoConfirmado: true });
                this.toastr.success("Cadastro realizado com sucesso!", "success", {
                    timeOut: 3000,
                    progressBar: true
                });
            }
        });
    }

    listarStatusPagamento(): void {
        this.pagamentoService.listarStatusPagamento().subscribe(response => {
            this.statusPagamento = response;
            console.log(this.statusPagamento)
        });
    }

    cancelar() {
        this.dialogRef.destroy();
    }
}
