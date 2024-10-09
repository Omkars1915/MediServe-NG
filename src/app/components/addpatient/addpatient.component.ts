import { Component } from '@angular/core';
import { DoctorhomeComponent } from "../doctorhome/doctorhome.component";
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { Patient } from '../../models/patient/patient.module';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-addpatient',
  standalone: true,
  imports: [DoctorhomeComponent,FormsModule,CommonModule],
  templateUrl: './addpatient.component.html',
  styleUrl: './addpatient.component.css'
})
export class AddpatientComponent {

  patient:Patient={
    id: 0,
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    contactNumber: '',
    email: '',
    address: '',
    password: ''
  }

  constructor(private patientservice:PatientService,private router:Router){}

  addpatient(){
    this.patientservice.addpatient(this.patient).subscribe((response)=>{
      alert("Patient added")
      this.router.navigate(['/doctorhome'])
  })
  }
}
