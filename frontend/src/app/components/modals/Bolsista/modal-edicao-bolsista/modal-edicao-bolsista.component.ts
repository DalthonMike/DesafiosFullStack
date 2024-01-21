import { Component, OnInit } from '@angular/core';
import { BolsistaService } from "../../../../service/bolsista.service";
import { NgForm } from "@angular/forms";
import { BolsistaModel } from "../../../../model/bolsista.model";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-modal-cadastro-bolsista',
    templateUrl: './modal-edicao-bolsista.component.html',
    styleUrls: ['./modal-edicao-bolsista.component.css'],
    providers: [ToastrService]
})
export class ModalEdicaoBolsistaComponent implements OnInit {

    bancos: any[] = [];
    identificadores: any[] = [];

    public resource = new BolsistaModel();
    private dadosBolsista: any;

    constructor(
        private bolsistaService: BolsistaService,
        private dialogService: DialogService,
        private toastr: ToastrService,
        private router: Router,
        private dialogRef: DynamicDialogRef,
        private dialogConfig: DynamicDialogConfig,
        ) {
    }

    ngOnInit(): void {
        this.bancos = ["Banco do Brasil", "Banco Itau", "Santander"]
        this.identificadores = ["CPF", "Carteira de identidade", "CNH"]
        this.dadosBolsista = this.dialogConfig.data;

        this.prepararForm(this.dadosBolsista);
    }

    prepararForm(dadosBolsista: any) {
        this.resource = dadosBolsista;
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
        this.toastr.success("Edição realizado com sucesso!", "success", {
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

    buscarBolsistaPorId(id: number) {

        //TODO lembrar de descomentar quando back estiver pronto
        // this.bolsistaService.buscarPorId(id).subscribe(response => {
        //
        //     if (response.status === 200) {
        //         this.dadosBolsista = response.body;
        //     }
        // });
    }

    cancelar() {
        this.dialogRef.close({ cancelamento: true });
    }
}
