import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBolsistaComponent } from './lista-bolsista.component';
import { DialogService } from "primeng/dynamicdialog";
import { BolsistaService } from "../../service/bolsista.service";
import { HttpClientModule } from "@angular/common/http";

describe('ListaBolsistaComponent', () => {
  let component: ListaBolsistaComponent;
  let fixture: ComponentFixture<ListaBolsistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBolsistaComponent ],
      providers: [DialogService, BolsistaService],
      imports: [
        HttpClientModule,
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
});
