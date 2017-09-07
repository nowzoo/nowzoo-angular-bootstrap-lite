import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverQuickstartComponent } from './popover-quickstart.component';

describe('PopoverQuickstartComponent', () => {
  let component: PopoverQuickstartComponent;
  let fixture: ComponentFixture<PopoverQuickstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverQuickstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverQuickstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
