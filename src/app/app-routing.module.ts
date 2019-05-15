import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProviderLoginComponent } from './components/providers/provider-login/provider-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 
  {
    path: 'provider-login',
    component: ProviderLoginComponent
  },
  {
    path: 'search',
   loadChildren: './components/users/provider-search/provider-search.module#ProviderSearchModule'
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
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
