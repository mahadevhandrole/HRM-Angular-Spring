import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLeadComponent } from './client-lead.component';

describe('ClientLeadComponent', () => {
  let component: ClientLeadComponent;
  let fixture: ComponentFixture<ClientLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
