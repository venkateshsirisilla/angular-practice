import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path :'',component :LoginComponent},
    {path :'login',component :LoginComponent},
    {path :'welcome/:userName',component :WelcomeComponent},
    {path :'**',component :ErrorComponent}
];
