import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment/appointment.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  appointment = {
    date: '',
    time: '',
    description: '',
    medicines: '',
    doctor_id: null,
    patient_id: null
  };

  bookappointment(date:string,time:string,description:string,medicines:string,doctor_id:number,patient_id:number):Observable<any>{
    const bookappointmenturl='http://localhost:8080/appointment/bookappointment'
    return this.http.post<Appointment>(bookappointmenturl,{date,time,description,medicines,doctor_id,patient_id})
  }

  getallappointments():Observable<any>{
    const getallappointmentsurl='http://localhost:8080/appointment/getappointments'
    return this.http.get<any>(getallappointmentsurl)
  }

  getappointmentsypatntid(patientid:number):Observable<any>{
    const getallappointmentsbypatientid= `http://localhost:8080/appointment/getappointmentbypatientId/${patientid}`
    return this.http.get<any>(getallappointmentsbypatientid)
  }

}
