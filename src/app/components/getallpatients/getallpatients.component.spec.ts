import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallpatientsComponent } from './getallpatients.component';

describe('GetallpatientsComponent', () => {
  let component: GetallpatientsComponent;
  let fixture: ComponentFixture<GetallpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallpatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
