import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMainPage } from './home-main.page';

describe('HomeMainPage', () => {
  let component: HomeMainPage;
  let fixture: ComponentFixture<HomeMainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
