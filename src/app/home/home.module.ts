import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AppCommonModule } from '../shared/app-common/app-common.module';

@NgModule({
  imports: [
    AppCommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
