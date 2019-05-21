import { NgModule } from '@angular/core'; 
import { UserRegisterComponent } from './user-register.component';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';

const routes = [
  {
    path: '',
    component: UserRegisterComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [UserRegisterComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})

export class UserRegisterModule { }
