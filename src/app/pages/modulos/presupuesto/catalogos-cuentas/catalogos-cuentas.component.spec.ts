import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosCuentasComponent } from './catalogos-cuentas.component';

describe('CatalogosCuentasComponent', () => {
  let component: CatalogosCuentasComponent;
  let fixture: ComponentFixture<CatalogosCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogosCuentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogosCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
