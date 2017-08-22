import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoGoesAwayNicelyComponent } from './modal-demo-goes-away-nicely.component';

describe('ModalDemoGoesAwayNicelyComponent', () => {
  let component: ModalDemoGoesAwayNicelyComponent;
  let fixture: ComponentFixture<ModalDemoGoesAwayNicelyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoGoesAwayNicelyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoGoesAwayNicelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
