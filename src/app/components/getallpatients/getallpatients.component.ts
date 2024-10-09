import { Component, OnInit } from '@angular/core';
import { DoctorComponent } from "../doctorlogin/doctor.component";
import { DoctorhomeComponent } from "../doctorhome/doctorhome.component";
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallpatients',
  standalone: true,
  imports: [DoctorComponent, DoctorhomeComponent,FormsModule,CommonModule],
  templateUrl: './getallpatients.component.html',
  styleUrl: './getallpatients.component.css'
})
export class GetallpatientsComponent implements OnInit {

  patients: any[]=[]

    constructor(private patientservice:PatientService, private router:Router){}
  ngOnInit(): void {
  this.getallpatients()
  }

    getallpatients(){
      this.patientservice.getallpatient().subscribe((response)=>{
        this.patients=response;
      })
    }
    deletepatient(id:number) {

    }
    
}
