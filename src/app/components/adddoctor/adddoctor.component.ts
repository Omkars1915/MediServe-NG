import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Doctor } from '../../models/doctor/doctor.module';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adddoctor',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adddoctor.component.html',
  styleUrl: './adddoctor.component.css'
})
export class AdddoctorComponent {

  constructor(private  router: Router,private adminservice:AdminService) { }
  doctor:Doctor={
    id: 0,
    firstName: '',
    lastName: '',
    specialization: '',
    contactNumber: '',
    email: '',
    password: ''
  }  
  addDoctor(){
    this.adminservice.adddoctor(this.doctor).subscribe((response)=>{
      alert("Doctor addes")
      this.router.navigate(['/adminhome'])
    })
  }

  }
