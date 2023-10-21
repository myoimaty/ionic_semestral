import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APIDigimonPage } from './api-digimon.page';

describe('APIDigimonPage', () => {
  let component: APIDigimonPage;
  let fixture: ComponentFixture<APIDigimonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(APIDigimonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
