import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistradorDeTesisComponent } from './registrador-de-tesis.component';

describe('RegistradorDeTesisComponent', () => {
  let component: RegistradorDeTesisComponent;
  let fixture: ComponentFixture<RegistradorDeTesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistradorDeTesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistradorDeTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
