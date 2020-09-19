import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { HttpClientModule} from '@angular/common/http';
import { StudentInfoService} from 'src/app/services/student-info.service';
import { RouterModule,Routes } from '@angular/router';
import { StudentDasboardComponent } from './components/student-dasboard/student-dasboard.component';
import { CompanyDasboardComponent } from './components/company-dasboard/company-dasboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { StudentUpdateComponent } from './components/student-update/student-update.component';
import { StudentCallComponent } from './components/student-call/student-call.component';
import { StudentEmailComponent } from './components/student-email/student-email.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentSearchComponent } from './components/student-search/student-search.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { ClientCallComponent } from './components/client-call/client-call.component';
import { ClientEmailComponent } from './components/client-email/client-email.component';
import { ClientSearchComponent } from './components/client-search/client-search.component';
import { BusinessInfoService } from 'src/app/services/business-info.service';

import { from } from 'rxjs';
import { StudentsContactComponent } from './components/students-contact/students-contact.component';
import { StudentsLeadComponent } from './components/students-lead/students-lead.component';
import { StudentsAccountComponent } from './components/students-account/students-account.component';
import { StudentsCancelledComponent } from './components/students-cancelled/students-cancelled.component';
import { ClientContactComponent } from './components/client-contact/client-contact.component';
import { ClientLeadComponent } from './components/client-lead/client-lead.component';
import { ClientAccountComponent } from './components/client-account/client-account.component';
import { ClientCancelledComponent } from './components/client-cancelled/client-cancelled.component';
import { CallDetailsService } from './services/call-details.service';
import { BusinessCallService } from './services/business-call.service';

const routes:Routes=[
  { path:'app-student-dasboard', component : StudentDasboardComponent},
  { path:'app-student-search/:keyword', component : AddStudentComponent},
  { path:'app-add-student/:status', component : AddStudentComponent},
  { path:'app-student-view/:id', component : StudentViewComponent},
  { path:'app-student-update/:id', component : StudentUpdateComponent},
  { path:'app-student-call/:id/:status', component : StudentCallComponent},
  { path:'app-student-email', component : StudentEmailComponent},
  { path:'app-students-contact/:status',component : StudentsContactComponent},
  { path:'app-students-lead/:status',component:StudentsLeadComponent},
  { path:'app-students-account/:status',component:StudentsAccountComponent},
  { path:'app-students-cancelled/:status',component:StudentsCancelledComponent},
  { path:'app-company-dasboard', component : CompanyDasboardComponent},
  { path:'app-add-client/:status', component : AddClientComponent},
  { path: 'app-client-search/:keyword', component : AddClientComponent},
  { path: 'app-client-view/:id', component : ClientViewComponent},
  { path:' app-client-update/:id', component : ClientUpdateComponent },
  { path:' app-client-call/:id:/status', component : ClientCallComponent},
  { path: ' app-client-email', component : ClientEmailComponent },
  { path:'app-client-contact/:status',component : ClientContactComponent},
  { path:'app-client-lead/:status',component:ClientLeadComponent},
  { path:'app-client-account/:status',component:ClientAccountComponent},
  { path:'app-client-cancelled/:status',component:ClientCancelledComponent},
  //{ path:'section', component : AddStudentComponent},
  //{ path: 'student_infoes', component : AddStudentComponent},
  { path: '', redirectTo:'/app-student-dasboard', pathMatch:"full"},
  { path: '**', redirectTo:'/app-student-dasboard', pathMatch:"full"}
];
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentDasboardComponent,
    CompanyDasboardComponent,
    StudentViewComponent,
    StudentUpdateComponent,
    StudentCallComponent,
    StudentEmailComponent,
    StudentSearchComponent,
    AddClientComponent,
    ClientViewComponent,
    ClientUpdateComponent,
    ClientCallComponent,
    ClientEmailComponent,
    ClientSearchComponent,
    StudentsContactComponent,
    StudentsLeadComponent,
    StudentsAccountComponent,
    StudentsCancelledComponent,
    ClientContactComponent,
    ClientLeadComponent,
    ClientAccountComponent,
    ClientCancelledComponent
  ],
  imports: [
   RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [StudentInfoService,
              BusinessInfoService,
              CallDetailsService,
              BusinessCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
