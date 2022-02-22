import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FITB1Component } from './fitb1.component';

describe('FITB1Component', () => {
  let component: FITB1Component;
  let fixture: ComponentFixture<FITB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FITB1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FITB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
