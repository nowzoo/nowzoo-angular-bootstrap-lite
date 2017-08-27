import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApiToggleDemoComponent } from './modal-api-toggle-demo.component';

describe('ModalApiToggleDemoComponent', () => {
  let component: ModalApiToggleDemoComponent;
  let fixture: ComponentFixture<ModalApiToggleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApiToggleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApiToggleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
