import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatiseursComponent } from './climatiseurs.component';

describe('ClimatiseursComponent', () => {
  let component: ClimatiseursComponent;
  let fixture: ComponentFixture<ClimatiseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimatiseursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimatiseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
