import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlRecursosComponent } from './ctrl-recursos.component';

describe('CtrlRecursosComponent', () => {
  let component: CtrlRecursosComponent;
  let fixture: ComponentFixture<CtrlRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtrlRecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrlRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
