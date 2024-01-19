import { Component, OnInit } from '@angular/core';
import { BolsistaService } from "../../../../service/bolsista.service";
import { BolsistaModel } from "../../../../model/bolsista.model";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-modal-cadastro-bolsista',
    templateUrl: './modal-visualizacao-bolsista.component.html',
    styleUrls: ['./modal-visualizacao-bolsista.component.css'],
    providers: [ToastrService]
})
export class ModalVisualizacaoBolsistaComponent implements OnInit {

    bancos: any[] = [];

    public resource = new BolsistaModel();
    public dadosBolsista: any;

    constructor(
        private bolsistaService: BolsistaService,
        private dialogRef: DynamicDialogRef,
        private dialogConfig: DynamicDialogConfig,
        ) {
    }

    ngOnInit(): void {
        this.dadosBolsista = this.dialogConfig.data;

        //TODO lembrar de descomentar quando back estiver pronto
        // this.buscarBolsistaPorId(this.dadosBolsista);
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

    sair() {
        this.dialogRef.close({ cancelamento: true });
    }
}
