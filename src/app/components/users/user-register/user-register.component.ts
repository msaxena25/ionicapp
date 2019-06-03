import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { SMS } from '@ionic-native/sms/ngx';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  mobileNumber: number;
  isOTPSent: boolean = false;
  otp: any;
  otpVarified: boolean = false;


  constructor(private toastService: ToastService, private storage: Storage, private router: Router,
    private sService: SharedService, private sms: SMS) { }

  ngOnInit() { }

  sendOTP() {
    var val = Math.floor(1000 + Math.random() * 9000);
    if (this.mobileNumber) {
      //CONFIGURATION
      var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          //  intent: 'INTENT'  // send SMS with the native android SMS messaging
          intent: '' // send SMS without opening any other app
        }
      };
    
      this.sms.send('9899131065', 'Welcome to my service. OTP is - ' + val, options)
        .then((response) => { alert('success' + response) }, (error) => { alert(error) });

      this.toastService.presentToast('OTP sent on ' + this.mobileNumber);
      this.isOTPSent = true;
    }

  }

  success() {

  }
  error() {

  }

  varifyOTP() {

    if (this.otp && this.otp.length == 4) {
      this.toastService.presentToast('OTP varified');
      this.otpVarified = true;
    }

  }

  onRegister() {
    this.toastService.presentToast('regitered');
    this.storage.set('isUserLoggedIn', true);
    this.sService.isUserLoggedIn = true;
    this.router.navigateByUrl('search');
  }

}
