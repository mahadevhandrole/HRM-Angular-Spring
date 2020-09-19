import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCallComponent } from './client-call.component';

describe('ClientCallComponent', () => {
  let component: ClientCallComponent;
  let fixture: ComponentFixture<ClientCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
