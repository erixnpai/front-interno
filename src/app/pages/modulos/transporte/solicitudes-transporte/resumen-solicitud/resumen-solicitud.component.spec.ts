import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenSolicitudComponent } from './resumen-solicitud.component';

describe('ResumenSolicitudComponent', () => {
  let component: ResumenSolicitudComponent;
  let fixture: ComponentFixture<ResumenSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenSolicitudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
