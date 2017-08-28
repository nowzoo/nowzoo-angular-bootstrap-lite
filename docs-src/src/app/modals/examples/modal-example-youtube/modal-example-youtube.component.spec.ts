import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleYoutubeComponent } from './modal-example-youtube.component';

describe('ModalExampleYoutubeComponent', () => {
  let component: ModalExampleYoutubeComponent;
  let fixture: ComponentFixture<ModalExampleYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
