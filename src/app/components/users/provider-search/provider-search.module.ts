import { NgModule } from '@angular/core';
import { ProviderSearchComponent } from './provider-search.component';
import { RouterModule } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AppCommonModule } from 'src/app/shared/app-common/app-common.module';


const routes = [
  {
    path: '',
    component: ProviderSearchComponent
  }
];

@NgModule({
  declarations: [ProviderSearchComponent],
  imports: [
    AppCommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [Geolocation, NativeGeocoder]
})
export class ProviderSearchModule { }
