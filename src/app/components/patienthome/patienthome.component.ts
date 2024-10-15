import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patienthome',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './patienthome.component.html',
  styleUrl: './patienthome.component.css'
})
export class PatienthomeComponent {
  username=sessionStorage.getItem("id");
  constructor(private appointmentservice:AppointmentService){}

  patientid!:number
  appointments:any[]=[]
  getappointmentbypatientid(){
    if (this.username !== null) {
      this.patientid = +this.username; 
    this.appointmentservice.getappointmentsypatntid(this.patientid).subscribe((response)=>{
      this.appointments=response
    })
  }
  }
}
