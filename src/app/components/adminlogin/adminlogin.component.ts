import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { FormsModule } from '@angular/forms'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  constructor(private adminloginservice:AdminService,private router:Router){}
  username:any
  password:any

  adminlogin(){
    if(this.username && this.password){
    this.adminloginservice.loginadmin(this.username,this.password).subscribe((resp)=>{
      if(resp!=null){ 
        this.router.navigate(['/adminhome'])
      }else{
        alert("Invalid Credientials")
      }
    })
  }
  }
}
