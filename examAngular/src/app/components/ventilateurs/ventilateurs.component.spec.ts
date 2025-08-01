import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilateursComponent } from './ventilateurs.component';

describe('VentilateursComponent', () => {
  let component: VentilateursComponent;
  let fixture: ComponentFixture<VentilateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentilateursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentilateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
