import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldoctorsComponent } from './getalldoctors.component';

describe('GetalldoctorsComponent', () => {
  let component: GetalldoctorsComponent;
  let fixture: ComponentFixture<GetalldoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetalldoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetalldoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
