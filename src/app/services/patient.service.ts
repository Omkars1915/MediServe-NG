import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient/patient.module';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

constructor(private http:HttpClient){}


  addpatient(patient:Patient):Observable<any>{
    const addpatienturl='http://localhost:8080/doctor/add-patient'
    return this.http.post<any>(addpatienturl,patient)
  }
}

