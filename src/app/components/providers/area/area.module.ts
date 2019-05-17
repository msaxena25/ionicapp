import { NgModule } from '@angular/core';
import { AreaComponent } from './area.component';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: AreaComponent
  }
];


@NgModule({
  declarations: [AreaComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AreaModule { }
