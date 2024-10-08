import { Component } from '@angular/core';
import { DoctorComponent } from "../doctorlogin/doctor.component";
import { DoctorhomeComponent } from "../doctorhome/doctorhome.component";

@Component({
  selector: 'app-getallpatients',
  standalone: true,
  imports: [DoctorComponent, DoctorhomeComponent],
  templateUrl: './getallpatients.component.html',
  styleUrl: './getallpatients.component.css'
})
export class GetallpatientsComponent {

}
