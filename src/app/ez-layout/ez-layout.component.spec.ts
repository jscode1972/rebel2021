import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzLayoutComponent } from './ez-layout.component';

describe('EzLayoutComponent', () => {
  let component: EzLayoutComponent;
  let fixture: ComponentFixture<EzLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
