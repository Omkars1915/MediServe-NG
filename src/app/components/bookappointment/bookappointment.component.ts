import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Appointment } from '../../models/appointment/appointment.module';
import { response } from 'express';
import { DoctorhomeComponent } from "../doctorhome/doctorhome.component";
import { Location } from '@angular/common';
@Component({
  selector: 'app-bookappointment',
  standalone: true,
  imports: [FormsModule, CommonModule, DoctorhomeComponent],
  templateUrl: './bookappointment.component.html',
  styleUrl: './bookappointment.component.css'
})
export class BookappointmentComponent {
back() {
this.location.back()
}
username:string|null=sessionStorage.getItem("id")

  constructor(private appointmentservice:AppointmentService,private router:Router,private location:Location){}
  appointment = {
    date: '',
    time: '',
    description: '',
    medicines: '',
    doctor_id: null,
    patient_id:  this.username ? Number(this.username) : null 
  };
  date: any
  time: any
  description: any
  medicines: any
  doctor_id: any
  patient_id!:number

  // ngOnInit() {
  //   // Set the patient ID from session storage when the component initializes
  //   if (this.username) {
  //     this.appointment.patient_id=+this.username // Convert string to number
  //   }
  // }
  bookappointment(){
    if (this.username !== null) {
      this.patient_id = +this.username; 
    this.appointmentservice.bookappointment(this.date,this.time,this.description,this.medicines,this.doctor_id,this.patient_id).subscribe((response)=>{
      alert("Appointment booked")
      // this.router.navigate(['getallappointments'])
    })
  }
  }
}
