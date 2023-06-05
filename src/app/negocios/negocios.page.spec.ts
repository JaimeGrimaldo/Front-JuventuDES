import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegociosPage } from './negocios.page';

describe('NegociosPage', () => {
  let component: NegociosPage;
  let fixture: ComponentFixture<NegociosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegociosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
