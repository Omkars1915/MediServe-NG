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

  adddoctor(doctor:Doctor):Observable<any>{
    const adddoctorurl='http://localhost:8080/doctor/add-doctor'
    return this.http.post(adddoctorurl,doctor)
  }

  getalldoctors():Observable<any[]>{
    const getalldoctorsurl='http://localhost:8080/doctor/get-all-doctors'
    return  this.http.get<any[]>(getalldoctorsurl)
  }

  deletedoctor(id:number):Observable<void>{
    const deletedoctorurl='http://localhost:8080/doctor/delete-doctor'
    return this.http.delete<void>(`${deletedoctorurl}/${id}`)
  }
}
