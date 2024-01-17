import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBolsistaComponent } from './lista-bolsista.component';

describe('ListaBolsistaComponent', () => {
  let component: ListaBolsistaComponent;
  let fixture: ComponentFixture<ListaBolsistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBolsistaComponent ]
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
