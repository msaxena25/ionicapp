import { NgModule } from '@angular/core';
import { ProviderProfileComponent } from './provider-profile.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';

const routes = [
  {
    path: '',
    component: ProviderProfileComponent
  }
];

@NgModule({
  declarations: [ProviderProfileComponent],
  imports: [
    AppCommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProviderProfileModule { }
