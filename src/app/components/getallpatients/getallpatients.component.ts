import { Component, OnInit } from '@angular/core';
import { DoctorComponent } from "../doctorlogin/doctor.component";
import { DoctorhomeComponent } from "../doctorhome/doctorhome.component";
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from "../adminhome/adminhome.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-getallpatients',
  standalone: true,
  imports: [DoctorComponent, DoctorhomeComponent, FormsModule, CommonModule, AdminhomeComponent],
  templateUrl: './getallpatients.component.html',
  styleUrl: './getallpatients.component.css'
})
export class GetallpatientsComponent implements OnInit {

  constructor(private patientservice:PatientService, private router:Router,private location:Location){}

back() {
this.location.back()
}

  patients: any[]=[]

  ngOnInit(): void {
  this.getallpatients()
  // this.searchpatient()
  }

    getallpatients(){
      this.patientservice.getallpatient().subscribe((response)=>{
        this.patients=response;
      })
    }

    deletepatient(id:number) {

    }
   id!: number;
   searchpatient(){
     this.patientservice.searchpatient(this.id).subscribe((response)=>{
      if(response!=null){
       this.patients=Array.isArray(response) ? response : [response];
      }else{
        alert("Patient not found")
      }
     })
   }
}
