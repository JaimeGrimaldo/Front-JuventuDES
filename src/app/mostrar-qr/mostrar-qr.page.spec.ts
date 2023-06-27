import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarQrPage } from './mostrar-qr.page';

describe('MostrarQrPage', () => {
  let component: MostrarQrPage;
  let fixture: ComponentFixture<MostrarQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MostrarQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
