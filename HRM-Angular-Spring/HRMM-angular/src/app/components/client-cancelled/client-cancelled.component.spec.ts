import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCancelledComponent } from './client-cancelled.component';

describe('ClientCancelledComponent', () => {
  let component: ClientCancelledComponent;
  let fixture: ComponentFixture<ClientCancelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCancelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
