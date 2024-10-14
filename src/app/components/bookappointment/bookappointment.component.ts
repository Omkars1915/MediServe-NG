import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Appointment } from '../../models/appointment/appointment.module';
import { response } from 'express';
import { DoctorhomeComponent } from "../doctorhome/doctorhome.component";
@Component({
  selector: 'app-bookappointment',
  standalone: true,
  imports: [FormsModule, CommonModule, DoctorhomeComponent],
  templateUrl: './bookappointment.component.html',
  styleUrl: './bookappointment.component.css'
})
export class BookappointmentComponent {

  constructor(private appointmentservice:AppointmentService,private router:Router){}
  appointment = {
    date: '',
    time: '',
    description: '',
    medicines: '',
    doctor_id: null,
    patient_id: null
  };
  bookappointment(){
    this.appointmentservice.bookappointment(this.appointment).subscribe((response)=>{
      alert("Appointment booked")
      this.router.navigate(['getallappointments'])
    })
  }
}
