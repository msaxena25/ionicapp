import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderSearchComponent } from './provider-search.component';
import { RouterModule } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';


const routes = [
  {
    path: '',
    component: ProviderSearchComponent
  }
];

@NgModule({
  declarations: [ProviderSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [Geolocation]
})
export class ProviderSearchModule { }
