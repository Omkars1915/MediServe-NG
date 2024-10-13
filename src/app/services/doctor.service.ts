import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

 
  constructor(private http:HttpClient) { }
  doctorlogin(id:number,password:string):Observable<any>{
    const doctorloginurl='http://localhost:8080/doctor/login-doctor'
    return this.http.post<any>(doctorloginurl,{id,password})
  }

  getdoctorbyid(id:number):Observable<any>{
    const getdoctorbyidurl=`http://localhost:8080/doctor/get-doctor-by-id/${id}`
    return this.http.get<any>(getdoctorbyidurl)
  }
  
}
