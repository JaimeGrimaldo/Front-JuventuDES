import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDatosPersonales1Page } from './form-datos-personales1.page';

describe('FormDatosPersonales1Page', () => {
  let component: FormDatosPersonales1Page;
  let fixture: ComponentFixture<FormDatosPersonales1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormDatosPersonales1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
