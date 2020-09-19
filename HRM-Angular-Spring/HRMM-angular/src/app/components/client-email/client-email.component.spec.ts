import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEmailComponent } from './client-email.component';

describe('ClientEmailComponent', () => {
  let component: ClientEmailComponent;
  let fixture: ComponentFixture<ClientEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
