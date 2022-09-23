import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { PacienteComponent } from './components/paciente/paciente.component';
const routes: Routes = [
{path: '',
  component: AdminComponent,
  children:
  [
    {path: 'paciente',
    component:PacienteComponent}
  ]
},
  {path:'', pathMatch:'full', redirectTo: 'login'},
  {path: 'login', component:LoginComponent},
  {path: 'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
