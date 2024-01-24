import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ModalEdicaoPagamentoComponent } from './modal-edicao-pagamento.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../../../../app-routing.module";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { TooltipModule } from "primeng/tooltip";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from "primeng/dynamicdialog";
import {FormsModule, NgForm} from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import { ToastrModule } from "ngx-toastr";
import { PagamentoService } from "../../../../service/pagamento.service";

describe('ModalEdicaoPagamentoComponent', () => {
  let component: ModalEdicaoPagamentoComponent;
  let fixture: ComponentFixture<ModalEdicaoPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEdicaoPagamentoComponent],
      providers: [
          DialogService,
          PagamentoService,
          NoopAnimationsModule,
          DynamicDialogRef,
          DynamicDialogConfig,],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        TableModule,
        CardModule,
        TooltipModule,
        DialogModule,
        DynamicDialogModule,
        DropdownModule,
        HttpClientModule,
        FormsModule,
        InputTextModule,
        ToastrModule.forRoot()
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
        .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEdicaoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call salvar when form is valid', fakeAsync(() => {
    spyOn(component, 'salvar');
    const pagamentoForm: NgForm = { valid: true } as NgForm;

    component.onSubmit(pagamentoForm);

    tick();

    expect(component.salvar).toHaveBeenCalled();
  }));

  it('should call dialogRef.destroy() on cancelar', () => {

    let dialogRef = TestBed.inject(DynamicDialogRef);
    spyOn(dialogRef, 'destroy');

    component.cancelar();

    expect(dialogRef.destroy).toHaveBeenCalled();
  });

});
