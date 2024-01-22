import { Component, OnInit } from '@angular/core';
import { BolsistaService } from "../../../../service/bolsista.service";
import { NgForm } from "@angular/forms";
import { BolsistaModel } from "../../../../model/bolsista.model";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-modal-cadastro-bolsista',
    templateUrl: './modal-cadastro-bolsista.component.html',
    styleUrls: ['./modal-cadastro-bolsista.component.css'],
    providers: [ToastrService]
})
export class ModalCadastroBolsistaComponent implements OnInit {

    bancos: String[] = [];

    identificadores: String[] = [];

    public resource = new BolsistaModel();

    constructor(
        private bolsistaService: BolsistaService,
        private dialogService: DialogService,
        private toastr: ToastrService,
        private router: Router,
        private dialogRef: DynamicDialogRef
        ) {
    }

    ngOnInit(): void {
        this.listarTodosTiposIdentificadores();
        this.listarTodosBancos();
        this.resource.identificador = "CPF"
    }

    onSubmit(bolsistaForm: NgForm) {

        if (bolsistaForm.valid) {
            this.salvar(bolsistaForm);
        } else {
            bolsistaForm.form["controls"]["nome"].markAsDirty();
            bolsistaForm.form["controls"]["identificador"].markAsDirty();
            bolsistaForm.form["controls"]["numeroIdentificador"].markAsDirty();
            bolsistaForm.form["controls"]["banco"].markAsDirty();
            bolsistaForm.form["controls"]["numeroAgencia"].markAsDirty();
            bolsistaForm.form["controls"]["numeroConta"].markAsDirty();
        }
    }

    salvar(bolsistaForm: NgForm) {

        this.bolsistaService.cadastro(bolsistaForm.value).subscribe(response => {

            if (response.status == 200) {
                this.dialogRef.close({ salvamentoConfirmado: true });
                this.toastr.success("Cadastro realizado com sucesso!", "success", {
                    timeOut: 3000,
                    progressBar: true
                });
            }
        }, (error) => {
            this.toastr.error(error.error.message, error.error.error, {
                timeOut: 3000,
                progressBar: true
            });
        });
    }

    listarTodosTiposIdentificadores(): void {
        this.bolsistaService.listarTodosTiposIdentificadores().subscribe(response => {
            this.identificadores = response;
        })
    }

    listarTodosBancos(): void {
        this.bolsistaService.listarTodosBancos().subscribe(response => {
            this.bancos = response;
        })
    }

    cancelar() {
        this.dialogRef.close({ cancelamento: true });
    }
}
