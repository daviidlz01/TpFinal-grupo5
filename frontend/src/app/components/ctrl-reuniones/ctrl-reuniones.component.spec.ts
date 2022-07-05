import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlReunionesComponent } from './ctrl-reuniones.component';

describe('CtrlReunionesComponent', () => {
  let component: CtrlReunionesComponent;
  let fixture: ComponentFixture<CtrlReunionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtrlReunionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrlReunionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
