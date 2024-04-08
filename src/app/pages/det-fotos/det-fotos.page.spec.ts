import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetFotosPage } from './det-fotos.page';

describe('DetFotosPage', () => {
  let component: DetFotosPage;
  let fixture: ComponentFixture<DetFotosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
