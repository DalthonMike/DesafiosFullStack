import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
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

    identificadores: String[] = [];

    public resource = new PagamentoModel();

    constructor(
        private pagamentoService: PagamentoService,
        private dialogService: DialogService,
        private toastr: ToastrService,
        private router: Router,
        private dialogRef: DynamicDialogRef
        ) {
    }

    ngOnInit(): void {
        this.listarStatusPagamento();
    }

    onSubmit(pagamentoForm: NgForm) {

        if (pagamentoForm.valid) {
            this.salvar(pagamentoForm);
        } else {
            pagamentoForm.form["controls"]["nome"].markAsDirty();
            pagamentoForm.form["controls"]["identificador"].markAsDirty();
            pagamentoForm.form["controls"]["numeroIdentificador"].markAsDirty();
            pagamentoForm.form["controls"]["banco"].markAsDirty();
            pagamentoForm.form["controls"]["numeroAgencia"].markAsDirty();
            pagamentoForm.form["controls"]["numeroConta"].markAsDirty();
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
            console.log(this.identificadores)
        });
    }

    cancelar() {
        this.dialogRef.close({ cancelamento: true });
    }
}
