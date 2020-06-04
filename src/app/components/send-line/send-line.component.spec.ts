import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLineComponent } from './send-line.component';

describe('SendLineComponent', () => {
  let component: SendLineComponent;
  let fixture: ComponentFixture<SendLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
