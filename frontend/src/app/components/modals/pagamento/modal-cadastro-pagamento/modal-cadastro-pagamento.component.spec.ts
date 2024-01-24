import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ModalCadastroPagamentoComponent } from './modal-cadastro-pagamento.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
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
import {HttpClientModule, HttpResponse} from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import {ToastrModule, ToastrService} from "ngx-toastr";
import { PagamentoService } from "../../../../service/pagamento.service";
import {of} from "rxjs";

describe('ModalCadastroBolsistaComponent', () => {
  let component: ModalCadastroPagamentoComponent;
  let fixture: ComponentFixture<ModalCadastroPagamentoComponent>;
  let dialogRef: jasmine.SpyObj<DynamicDialogRef>;
  let pagamentoServiceSpy: jasmine.SpyObj<PagamentoService>;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;

  beforeEach(async () => {
    const toastrServiceSpyObj = jasmine.createSpyObj('ToastrService', ['success']);
    const spy = jasmine.createSpyObj('MatDialogRef', ['destroy']);

    await TestBed.configureTestingModule({
      declarations: [ModalCadastroPagamentoComponent],
      providers: [
          DialogService,
          PagamentoService,
          NoopAnimationsModule,
        { provide: DynamicDialogRef, useValue: spy },
        { provide: ToastrService, useValue: toastrServiceSpyObj },
          DynamicDialogConfig],
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
    fixture = TestBed.createComponent(ModalCadastroPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o método destroy do DynamicDialogRef ao cancelar', () => {
    dialogRef = TestBed.inject(DynamicDialogRef) as jasmine.SpyObj<DynamicDialogRef>;
    component.cancelar();

    expect(dialogRef.destroy).toHaveBeenCalled();
  });
});
