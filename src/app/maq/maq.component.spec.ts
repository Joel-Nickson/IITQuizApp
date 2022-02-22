import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaqComponent } from './maq.component';

describe('MaqComponent', () => {
  let component: MaqComponent;
  let fixture: ComponentFixture<MaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
