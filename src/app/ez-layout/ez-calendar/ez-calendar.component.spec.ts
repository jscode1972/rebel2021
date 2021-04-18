import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzCalendarComponent } from './ez-calendar.component';

describe('EzCalendarComponent', () => {
  let component: EzCalendarComponent;
  let fixture: ComponentFixture<EzCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
