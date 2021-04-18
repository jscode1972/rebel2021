import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzToolbarComponent } from './ez-toolbar.component';

describe('EzToolbarComponent', () => {
  let component: EzToolbarComponent;
  let fixture: ComponentFixture<EzToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
