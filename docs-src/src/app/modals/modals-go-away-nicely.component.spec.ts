import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsGoAwayNicelyComponent } from './modals-go-away-nicely.component';

describe('ModalsGoAwayNicelyComponent', () => {
  let component: ModalsGoAwayNicelyComponent;
  let fixture: ComponentFixture<ModalsGoAwayNicelyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsGoAwayNicelyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsGoAwayNicelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
