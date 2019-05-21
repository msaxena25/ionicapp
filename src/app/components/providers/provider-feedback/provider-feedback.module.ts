import { NgModule } from '@angular/core'; 
import { ProviderFeedbackComponent } from './provider-feedback.component';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';
import { RouterModule } from '@angular/router';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';

const routes = [
  {
    path: '',
    component: ProviderFeedbackComponent
  }
];
@NgModule({
  declarations: [ProviderFeedbackComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProviderFeedbackModule { }
