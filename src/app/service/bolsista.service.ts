import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BolsistaModel } from "../model/bolsista.model";

@Injectable({
    providedIn: 'root'
})
export class BolsistaService {

    protected http: HttpClient;
    private pathBase: string = environment.apiUrl;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getPathPageable(): string {
        return '';
    }

    listar() {
        return this.http.post<any>(`${this.pathBase}/bolsista`, {
            observe: 'response',
        });
    }

    cadastro(formData: BolsistaModel) {
        return this.http.post<any>(`${this.pathBase}/bolsista`, formData, {
            observe: 'response',
        });
    }

    buscarPorId(id: number) {
        return this.http.post<any>(`${this.pathBase}/bolsista/${id}`, {
            observe: 'response',
        });
    }

    deletar(id: number) {
        return this.http.post<any>(`${this.pathBase}/bolsista/${id}`, {
            observe: 'response',
        });
    }
}
