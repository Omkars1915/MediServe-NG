import { Component } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patientlogin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './patientlogin.component.html',
  styleUrl: './patientlogin.component.css'
})
export class PatientloginComponent {

  constructor(private patientservice:PatientService,private router:Router){}

  id:any
  password:any
  patientlogin(){
    if(this.id && this.password){
    this.patientservice.patientlogin(this.id,this.password).subscribe((response)=>{

      if(response!=null){ 
        this.router.navigate(['/patienthome'])
      }else{
        alert("Invalid Credientials")
      }
    })
  }
    }
  
}
