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
    const addpatienturl='http://localhost:8080/patient/add-patient'
    return this.http.post<any>(addpatienturl,patient)
  }

  getallpatient():Observable<any>{
    const getallpatienturl='http://localhost:8080/patient/getallpatients'
    return this.http.get<any>(getallpatienturl)
  }
}

