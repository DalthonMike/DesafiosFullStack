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
    private idBolsista: number;

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
        this.listarTodosTiposIdentificadores();
        this.listarTodosBancos();

        this.resource = this.dialogConfig.data;
        this.idBolsista = this.dialogConfig.data?.id;
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

    salvar(bolsistaForm: NgForm) {


        this.resource = bolsistaForm.value;
        this.resource.id = this.idBolsista;

        this.bolsistaService.cadastro(this.resource).subscribe(response => {
            if (response.status == 200) {
                this.dialogRef.close({ salvamentoConfirmado: true });
                this.toastr.success("Edição realizado com sucesso!", "success", {
                    timeOut: 3000,
                    progressBar: true
                });
            }
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
