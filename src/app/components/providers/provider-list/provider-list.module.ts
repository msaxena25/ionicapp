import { NgModule } from '@angular/core';
import { ProviderListComponent } from './provider-list.component';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [{   
    path: '',
    component: ProviderListComponent
}]

@NgModule({
  declarations: [ProviderListComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class ProviderListModule { }
