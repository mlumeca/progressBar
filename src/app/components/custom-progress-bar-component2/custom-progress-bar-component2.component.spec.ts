import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProgressBarComponent2Component } from './custom-progress-bar-component2.component';

describe('CustomProgressBarComponent2Component', () => {
  let component: CustomProgressBarComponent2Component;
  let fixture: ComponentFixture<CustomProgressBarComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomProgressBarComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomProgressBarComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
