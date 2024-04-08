import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetHeroe1Page } from './det-heroe1.page';

describe('DetHeroe1Page', () => {
  let component: DetHeroe1Page;
  let fixture: ComponentFixture<DetHeroe1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetHeroe1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
