import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroBolsistaComponent } from './modal-cadastro-bolsista.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../../../../app-routing.module";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { TooltipModule } from "primeng/tooltip";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { DialogService, DynamicDialogModule, DynamicDialogRef } from "primeng/dynamicdialog";
import { BolsistaService } from "../../../../service/bolsista.service";
import { FormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import { ToastrModule } from "ngx-toastr";

describe('ModalCadastroBolsistaComponent', () => {
  let component: ModalCadastroBolsistaComponent;
  let fixture: ComponentFixture<ModalCadastroBolsistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCadastroBolsistaComponent],
      providers: [
          DialogService,
          BolsistaService,
          NoopAnimationsModule,
          DynamicDialogRef],
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
    fixture = TestBed.createComponent(ModalCadastroBolsistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
