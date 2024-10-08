import { Component, OnInit } from '@angular/core';
import { DoctorhomeComponent } from "../doctorhome/doctorhome.component";
import { AdminhomeComponent } from "../adminhome/adminhome.component";
import { AdminService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-getalldoctors',
  standalone: true,
  imports: [DoctorhomeComponent, AdminhomeComponent,FormsModule,CommonModule],
  templateUrl: './getalldoctors.component.html',
  styleUrl: './getalldoctors.component.css'
})
export class GetalldoctorsComponent implements OnInit{

  constructor(private adminservice:AdminService){}
  ngOnInit(): void {
    this.getalldoctors();
  }
  doctors:any[]=[]
  getalldoctors(){
    this.adminservice.getalldoctors().subscribe((response)=>{
      this.doctors=response;
    })
  }

  deletedoctor(id:number){
    this.adminservice.deletedoctor(id).subscribe((response)=>{
      alert('Doctor deleted successfully');
      // window.location.href='/getallusers'
      window.location.reload()
  })
}

}
