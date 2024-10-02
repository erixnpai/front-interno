import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistorialTrasnporteComponent } from './view-historial-trasnporte.component';

describe('ViewHistorialTrasnporteComponent', () => {
  let component: ViewHistorialTrasnporteComponent;
  let fixture: ComponentFixture<ViewHistorialTrasnporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHistorialTrasnporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHistorialTrasnporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
