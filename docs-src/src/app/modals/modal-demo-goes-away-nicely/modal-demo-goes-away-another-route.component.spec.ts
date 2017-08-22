import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemoGoesAwayAnotherRouteComponent } from './modal-demo-goes-away-another-route.component';

describe('ModalDemoGoesAwayAnotherRouteComponent', () => {
  let component: ModalDemoGoesAwayAnotherRouteComponent;
  let fixture: ComponentFixture<ModalDemoGoesAwayAnotherRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemoGoesAwayAnotherRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemoGoesAwayAnotherRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
