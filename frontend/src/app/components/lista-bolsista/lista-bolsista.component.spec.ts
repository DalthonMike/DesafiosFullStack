import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ListaBolsistaComponent } from './lista-bolsista.component';
import { DialogService } from "primeng/dynamicdialog";
import { BolsistaService } from "../../service/bolsista.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from "ngx-toastr";
import { ConfirmationService } from "primeng/api";
import { of } from "rxjs";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('ListaBolsistaComponent', () => {
  let component: ListaBolsistaComponent;
  let fixture: ComponentFixture<ListaBolsistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBolsistaComponent ],
      providers: [ DialogService, BolsistaService, ConfirmationService],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBolsistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('lista todos os bolsistas ', fakeAsync(() => {
    spyOn(component.bolsistaService, 'listarTodos').and.returnValue(of(['Bolsista1', 'Bolsista2']));


    component.listarTodos();component.listarTodos();
  }));
});
