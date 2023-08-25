import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaUsuarioPage } from './crea-usuario.page';

describe('CreaUsuarioPage', () => {
  let component: CreaUsuarioPage;
  let fixture: ComponentFixture<CreaUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreaUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
