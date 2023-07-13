import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaFabComponent } from './cta-fab.component';

describe('CtaFabComponent', () => {
  let component: CtaFabComponent;
  let fixture: ComponentFixture<CtaFabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaFabComponent]
    });
    fixture = TestBed.createComponent(CtaFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
