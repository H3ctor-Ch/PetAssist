import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEspecialistaComponent } from './detalles-especialista.component';

describe('DetallesEspecialistaComponent', () => {
  let component: DetallesEspecialistaComponent;
  let fixture: ComponentFixture<DetallesEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesEspecialistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
