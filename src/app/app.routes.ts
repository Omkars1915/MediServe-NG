import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DoctorComponent } from './components/doctorlogin/doctor.component';
import { PatientloginComponent } from './components/patientlogin/patientlogin.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { DoctorhomeComponent } from './components/doctorhome/doctorhome.component';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';
import { GetalldoctorsComponent } from './components/getalldoctors/getalldoctors.component';
import { AddpatientComponent } from './components/addpatient/addpatient.component';
import { GetallpatientsComponent } from './components/getallpatients/getallpatients.component';
import { BookappointmentComponent } from './components/bookappointment/bookappointment.component';
import { GetallappointmentsComponent } from './components/getallappointments/getallappointments.component';
import { PatienthomeComponent } from './components/patienthome/patienthome.component';
import { AdminauthService } from './services/adminauth.service';


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
        path:'adminhome',component:AdminhomeComponent,canActivate:[AdminauthService]
    },
    {
        path:'doctorhome',component:DoctorhomeComponent
    },
    {
        path:'adddoctor', component:AdddoctorComponent,canActivate:[AdminauthService]
    },
    {
        path:'getalldoctors',component:GetalldoctorsComponent,canActivate:[AdminauthService]
    },
    {
        path:'addpatient',component:AddpatientComponent
    },
    {
        path:'getallpatients',component:GetallpatientsComponent,canActivate:[AdminauthService]
    },
    {
        path:'bookappointment',component:BookappointmentComponent
    },
    {
        path:'getallappointments',component:GetallappointmentsComponent
    },
    {
        path:'patienthome',component:PatienthomeComponent
    }

];
