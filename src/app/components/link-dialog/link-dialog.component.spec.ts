import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDialogComponent } from './link-dialog.component';

describe('LinkDialogComponent', () => {
  let component: LinkDialogComponent;
  let fixture: ComponentFixture<LinkDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
