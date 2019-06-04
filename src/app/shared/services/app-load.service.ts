import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SharedService } from './shared.service';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor(private storage: Storage, private sharedService: SharedService, private platform: Platform,
    private androidPermissions: AndroidPermissions) {
    this.platform.ready().then(() => {

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
        result => {
          alert('Has permission? ' + result.hasPermission)
          if (!result.hasPermission) {
            this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.CAMERA])
              .then((result) => { alert('granted permission:  ' + result) }, error => { alert(error) });
          }
        },
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS)
      );

      /*   this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        this.androidPermissions.PERMISSION.RECEIVE_SMS,
        this.androidPermissions.PERMISSION.CALL_PHONE, */

      // this.androidPermissions.requestPermissions(
      //   [
      //     this.androidPermissions.PERMISSION.CAMERA,


      //     this.androidPermissions.PERMISSION.SEND_SMS,

      //   ]
      //     ).then((result) => { alert('granted permission:  ' + result) }, error => { alert(error) });

    })
  }

  async initializeApp() {
    await this.storage.get('isUserLoggedIn').then((val) => {
      if (val) {
        console.log('User is logged In', val);
        this.sharedService.isUserLoggedIn = true;
      }

    });

    // For future use
    this.platform.ready().then(() => {

      this.platform.backButton.subscribe(() => {
        // code that is executed when the user pressed the back button
        // and ionic doesn't already know what to  
        //  alert('hi pressed back button');
      });
      //  console.log('app initialized');
    })


  }
}
