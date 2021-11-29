import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentadorDeTesisComponent } from './presentador-de-tesis.component';

describe('PresentadorDeTesisComponent', () => {
  let component: PresentadorDeTesisComponent;
  let fixture: ComponentFixture<PresentadorDeTesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentadorDeTesisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentadorDeTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
