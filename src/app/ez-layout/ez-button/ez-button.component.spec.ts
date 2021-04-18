import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzButtonComponent } from './ez-button.component';

describe('EzButtonComponent', () => {
  let component: EzButtonComponent;
  let fixture: ComponentFixture<EzButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
