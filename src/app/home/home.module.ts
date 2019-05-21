import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AppCommonModule } from '../shared/app-common/app-common.module';
import { AuthGuard } from '../core/auth.guard';

@NgModule({
  imports: [
    AppCommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        canActivate: [AuthGuard]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
