import { NgModule } from '@angular/core';
import { ServicesListComponent } from './services-list.component';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ServicesListComponent
  }
];


@NgModule({
  declarations: [ServicesListComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesListModule { }
