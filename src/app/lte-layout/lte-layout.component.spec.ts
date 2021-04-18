import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LteLayoutComponent } from './lte-layout.component';

describe('LteLayoutComponent', () => {
  let component: LteLayoutComponent;
  let fixture: ComponentFixture<LteLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LteLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
