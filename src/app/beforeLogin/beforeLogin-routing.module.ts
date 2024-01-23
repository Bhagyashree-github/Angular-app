import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ForgotpasswordComponent } from "./pages/forgotpassword/forgotpassword.component";
import { PasswordfieldComponent } from "./pages/passwordfield/passwordfield.component";
import { NgModule } from "@angular/core";

 const routes:Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'forgot-password', component:ForgotpasswordComponent},
    {path:'forgot-passwordfield',component:PasswordfieldComponent},
    
 ]

 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class beforeLoginRoutingModule{
    
  }