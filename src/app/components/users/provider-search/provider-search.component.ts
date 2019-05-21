import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-provider-search',
  templateUrl: './provider-search.component.html',
  styleUrls: ['./provider-search.component.scss'],
})
export class ProviderSearchComponent implements OnInit {
  cordData : any ;
  isUserLoggedIn: boolean = false;

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  }

  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder,
    private route: Router, private sService: SharedService) { 
      this.isUserLoggedIn = this.sService.isUserLoggedIn;
    }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.cordData = resp.coords;
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data);
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });

    this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, this.options)
      .then((result: any[]) => console.log(JSON.stringify(result[0])))
      .catch((error: any) => console.log(error));

  }

  onSearch(){
      this.route.navigateByUrl('provider-list');
  }

  openUserProfile(){
    this.route.navigateByUrl('user-profile');
  }

}
