import { NgModule } from '@angular/core'; 
import { UserProfileComponent } from './user-profile.component';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: UserProfileComponent
  }
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [ 
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserProfileModule { }
