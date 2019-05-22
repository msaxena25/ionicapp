import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

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
    private sService: SharedService) { }

  ngOnInit() { }

  sendOTP() {
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log('otp is:', val);
    if (this.mobileNumber) {
      this.toastService.presentToast('OTP sent on ' + this.mobileNumber);
      this.isOTPSent = true;
    }

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
