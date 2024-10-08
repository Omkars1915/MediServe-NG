import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DoctorComponent } from './components/doctorlogin/doctor.component';
import { PatientloginComponent } from './components/patientlogin/patientlogin.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { DoctorhomeComponent } from './components/doctorhome/doctorhome.component';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';

export const routes: Routes = [
    {
        path:'', component:HomeComponent
    },
    {
        path: 'adminlogin', component:AdminloginComponent
    },
    {
        path:'doctorlogin',component:DoctorComponent
    },
    {
        path:'patientlogin',component:PatientloginComponent
    },
    {
        path:'adminhome',component:AdminhomeComponent
    },
    {
        path:'doctorhome',component:DoctorhomeComponent
    },
    {
        path:'adddoctor', component:AdddoctorComponent
    }

];
