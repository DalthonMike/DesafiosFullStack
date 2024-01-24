import { Component, OnInit } from '@angular/core';
import { BolsistaService } from "../../../../service/bolsista.service";
import { BolsistaModel } from "../../../../model/bolsista.model";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-modal-cadastro-bolsista',
    templateUrl: './modal-visualizacao-pagamento.component.html',
    styleUrls: ['./modal-visualizacao-pagamento.component.css'],
    providers: [ToastrService]
})
export class ModalVisualizacaoPagamentoComponent implements OnInit {

    bancos: any[] = [];

    public resource = new BolsistaModel();
    public dadosPagamento: any;

    constructor(
        private bolsistaService: BolsistaService,
        private dialogRef: DynamicDialogRef,
        private dialogConfig: DynamicDialogConfig,
        ) {
    }

    ngOnInit(): void {
        this.dadosPagamento = this.dialogConfig.data;
    }

    sair() {
        this.dialogRef.close({ cancelamento: true });
    }
}
