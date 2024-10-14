import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { response } from 'express';
import { DoctorhomeComponent } from "../doctorhome/doctorhome.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallappointments',
  standalone: true,
  imports: [DoctorhomeComponent,FormsModule,CommonModule],
  templateUrl: './getallappointments.component.html',
  styleUrl: './getallappointments.component.css'
})
export class GetallappointmentsComponent implements OnInit {
  constructor(private appointmentservice:AppointmentService){}
  ngOnInit(): void {
    this.getallappointments()
  }

  showappoitment:any[]=[]
  getallappointments(){
    this.appointmentservice.getallappointments().subscribe((response)=>{
      this.showappoitment=response
    })
  }

}
