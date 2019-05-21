import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';
import { RouterModule } from '@angular/router';
import { ProviderHomeComponent } from './provider-home.component';


const routes = [
  {
    path: '',
    component: ProviderHomeComponent,
    children: [
      {
        path: 'profile',
        loadChildren: './components/providers/provider-profile/provider-profile.module#ProviderProfileModule'
      },
      {
        path: 'services',
        loadChildren: './components/providers/services-list/services-list.module#ServicesListModule'
      },
      {
        path: 'areas',
        loadChildren: './components/providers/area/area.module#AreaModule'
      },
      {
        path: 'feedback',
        loadChildren: './components/providers/provider-feedback/provider-feedback.module#ProviderFeedbackModule'
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [ProviderHomeComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProviderHomeModule { }
