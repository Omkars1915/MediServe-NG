import { Component } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

  constructor(private doctorservice:DoctorService,private router:Router){}
  id:any
  password:any
  logindoctor(){
    if(this.id && this.password){
    this.doctorservice.doctorlogin(this.id,this.password).subscribe((resp)=>{
      if(resp!=null){ 
        this.router.navigate(['/doctorhome'])
      }else{
        alert("Invalid Credientials")
      }
    })
  }
}
}
