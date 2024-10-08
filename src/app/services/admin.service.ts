import { HttpClient,withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor/doctor.module';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  loginadmin(username:string,password:string):Observable<any>{
    const adminloginurl='http://localhost:8080/admin/login-admin'
    return this.http
      .post<any>(adminloginurl, { username, password })
  }

  adddoctor(doctor:Doctor){
    const adddoctorurl='http://localhost:8080/admin/add-doctor'
    return this.http.post(adddoctorurl,doctor)
  }

}
