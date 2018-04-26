import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenMessageComponent } from './listen-message.component';

describe('ListenMessageComponent', () => {
  let component: ListenMessageComponent;
  let fixture: ComponentFixture<ListenMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
