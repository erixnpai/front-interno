import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddViewEditCatcuentasComponent } from './add-view-edit-catcuentas.component';

describe('AddViewEditCatcuentasComponent', () => {
  let component: AddViewEditCatcuentasComponent;
  let fixture: ComponentFixture<AddViewEditCatcuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddViewEditCatcuentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddViewEditCatcuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
