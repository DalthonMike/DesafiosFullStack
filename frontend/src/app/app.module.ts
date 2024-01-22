import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import { RouterModule } from "@angular/router";
import { ToastrModule, ToastrService } from "ngx-toastr";

import { ApenasLetrasDirective } from "./components/directives/olny-text";
import { ApenasNumerosDirective } from "./components/directives/only-numbers";
import { DialogService } from "primeng/dynamicdialog";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaBolsistaComponent } from './components/lista-bolsista/lista-bolsista.component';
import { ModalCadastroBolsistaComponent } from './components/modals/Bolsista/modal-cadastro-bolsista/modal-cadastro-bolsista.component';
import { ModalVisualizacaoBolsistaComponent } from "./components/modals/Bolsista/modal-visualizacao-bolsista/modal-visualizacao-bolsista.component";
import { ModalEdicaoBolsistaComponent } from "./components/modals/Bolsista/modal-edicao-bolsista/modal-edicao-bolsista.component";
import { ListaPagamentoComponent } from "./components/lista-pagamento/lista-pagamento.component";
import { ModalCadastroPagamentoComponent } from "./components/modals/pagamento/modal-cadastro-pagamento/modal-cadastro-pagamento.component";
import { ConfirmationService } from "primeng/api";
import { ConfirmDialogModule } from "primeng/confirmdialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaBolsistaComponent,
    ModalCadastroBolsistaComponent,
    ModalVisualizacaoBolsistaComponent,
    ModalEdicaoBolsistaComponent,
    ListaPagamentoComponent,
    ModalCadastroPagamentoComponent,
    ApenasLetrasDirective,
    ApenasNumerosDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    CardModule,
    TooltipModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right'
    }),
    ConfirmDialogModule,
  ],
  providers: [DialogService, ToastrService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
