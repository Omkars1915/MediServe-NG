import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallappointmentsComponent } from './getallappointments.component';

describe('GetallappointmentsComponent', () => {
  let component: GetallappointmentsComponent;
  let fixture: ComponentFixture<GetallappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallappointmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
