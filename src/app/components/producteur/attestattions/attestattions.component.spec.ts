import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestattionsComponent } from './attestattions.component';

describe('AttestattionsComponent', () => {
  let component: AttestattionsComponent;
  let fixture: ComponentFixture<AttestattionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttestattionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttestattionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
