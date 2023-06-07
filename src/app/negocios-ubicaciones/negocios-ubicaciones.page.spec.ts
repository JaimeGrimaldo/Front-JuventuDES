import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegociosUbicacionesPage } from './negocios-ubicaciones.page';

describe('NegociosUbicacionesPage', () => {
  let component: NegociosUbicacionesPage;
  let fixture: ComponentFixture<NegociosUbicacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegociosUbicacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
