import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProviderLoginComponent } from './components/providers/provider-login/provider-login.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },

  {
    path: 'user-login',
    component: UserLoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-register',
    loadChildren: './components/users/user-register/user-register.module#UserRegisterModule'
  },
  {
    path: 'user-profile',
    loadChildren: './components/users/user-profile/user-profile.module#UserProfileModule'
  },
  {
    path: 'provider-login',
    component: ProviderLoginComponent
  },
  {
    path: 'search',
    loadChildren: './components/users/provider-search/provider-search.module#ProviderSearchModule'
  },
  {
    path: 'provider-home',
    loadChildren: './components/providers/provider-home/provider-home.module#ProviderHomeModule'
  },
  {
    path: 'provider-list',
    loadChildren: './components/providers/provider-list/provider-list.module#ProviderListModule'
  },
  {
    path: 'provider-register',
    loadChildren: './components/providers/provider-register/provider-register.module#ProviderRegisterModule'
  },
  {
    path: 'provider-profile',
    loadChildren: './components/providers/provider-profile/provider-profile.module#ProviderProfileModule'
  },
  {
    path: 'provider-services',
    loadChildren: './components/providers/services-list/services-list.module#ServicesListModule'
  },
  {
    path: 'provider-areas',
    loadChildren: './components/providers/area/area.module#AreaModule'
  },
  {
    path: 'provider-feedback',
    loadChildren: './components/providers/provider-feedback/provider-feedback.module#ProviderFeedbackModule'
  },
  
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
