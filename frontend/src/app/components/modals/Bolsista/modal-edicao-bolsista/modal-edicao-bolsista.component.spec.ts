import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdicaoBolsistaComponent } from './modal-edicao-bolsista.component';
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
import { BolsistaService } from "../../../../service/bolsista.service";
import { FormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { InputTextModule } from "primeng/inputtext";
import { ToastrModule } from "ngx-toastr";

describe('ModalEdicaoBolsistaComponent', () => {
  let component: ModalEdicaoBolsistaComponent;
  let fixture: ComponentFixture<ModalEdicaoBolsistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEdicaoBolsistaComponent],
      providers: [
          DialogService,
          BolsistaService,
          NoopAnimationsModule,
          DynamicDialogRef,
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
    fixture = TestBed.createComponent(ModalEdicaoBolsistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
