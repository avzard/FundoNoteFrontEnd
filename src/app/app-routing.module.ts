import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'User/ResetPassword/:token', component: ForgotPasswordComponent },
  { path: 'forgot-email', component: ForgotEmailComponent },
  { path: 'dashboard', component: DashboardComponent,
    children:[{ path: 'note', component:GetAllNotesComponent},]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

