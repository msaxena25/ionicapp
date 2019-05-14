import { NgModule } from '@angular/core';
import { ProviderListComponent } from './provider-list.component';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';

@NgModule({
  declarations: [ProviderListComponent],
  imports: [
    AppCommonModule
    
  ]
})
export class ProviderListModule { }
