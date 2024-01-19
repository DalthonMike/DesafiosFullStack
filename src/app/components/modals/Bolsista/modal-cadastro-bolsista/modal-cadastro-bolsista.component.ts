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

    bancos: any[] = [];

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
        this.bancos = ["Banco do Brasil", "Banco Itau", "Santander"]
    }

    onSubmit(bolsistaForm: NgForm) {

        if (bolsistaForm.valid) {
            this.salvar(bolsistaForm);
        } else {
            bolsistaForm.form["controls"]["nome"].markAsDirty();
            bolsistaForm.form["controls"]["tipoIdentificador"].markAsDirty();
            bolsistaForm.form["controls"]["banco"].markAsDirty();
            bolsistaForm.form["controls"]["agencia"].markAsDirty();
            bolsistaForm.form["controls"]["conta"].markAsDirty();
        }
    }

    salvar(bolsistaForm: any) {

        this.dialogRef.close({ salvamentoConfirmado: true });
        this.toastr.success("Cadastro realizado com sucesso!", "success", {
            timeOut: 3000,
            progressBar: true
        });

        //TODO lembrar de voltar aqui para descomentar requisição para o backend.\\
        // this.bolsistaService.cadastro(bolsistaForm).subscribe(response => {
        //
        //     if (response.status == 200) {
        //
        //     }
        // });
    }

    cancelar() {
        this.dialogRef.close({ cancelamento: true });
    }
}