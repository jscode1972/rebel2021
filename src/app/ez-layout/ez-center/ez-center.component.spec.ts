import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzCenterComponent } from './ez-center.component';

describe('EzCenterComponent', () => {
  let component: EzCenterComponent;
  let fixture: ComponentFixture<EzCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
