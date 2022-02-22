import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fitb2Component } from './fitb2.component';

describe('Fitb2Component', () => {
  let component: Fitb2Component;
  let fixture: ComponentFixture<Fitb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fitb2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fitb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
