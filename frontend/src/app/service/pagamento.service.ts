import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { PagamentoModel } from "../model/pagamento.model";

@Injectable({
    providedIn: 'root'
})
export class PagamentoService {

    protected http: HttpClient;
    private pathBase: string = environment.apiUrl;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getPathPageable(): string {
        return '';
    }

    listarTodos() {
        return this.http.get<any[]>(`${this.pathBase}/pagamento/todos`);
    }

    listarStatusPagamento() {
        return this.http.get<any[]>(`${this.pathBase}/enums/status-pagamento`);
    }

    cadastro(formData: PagamentoModel) {
        return this.http.post<any>(`${this.pathBase}/pagamento/cadastrar`, formData, {
            observe: 'response',
        });
    }

    listarPagamentosPorBolsistaId(idBolsista: number) {
        return this.http.get<any>(`${this.pathBase}/bolsista/${idBolsista}`, {
            observe: 'response',
        });
    }

    deletar(id: number) {
        return this.http.post<any>(`${this.pathBase}/pagamento/${id}`, {
            observe: 'response',
        });
    }
}
