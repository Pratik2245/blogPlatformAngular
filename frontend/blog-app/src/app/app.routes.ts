import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [


    {
        path: "",
        component: Home,
        canActivate: [authGuard]
    }, {
        path: 'login',
        component: Login,
        canActivate: [authGuard]
    }, {
        path: 'register',
        component: Register,
        canActivate: [authGuard]
    }
];
