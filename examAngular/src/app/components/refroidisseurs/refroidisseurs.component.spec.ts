import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefroidisseursComponent } from './refroidisseurs.component';

describe('RefroidisseursComponent', () => {
  let component: RefroidisseursComponent;
  let fixture: ComponentFixture<RefroidisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefroidisseursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefroidisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
