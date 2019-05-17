import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AppMessage } from 'src/app/shared/app-message.enum';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.scss'],
})
export class ProviderLoginComponent implements OnInit {

  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() { }

  onNewRegister() {
    this.router.navigateByUrl('/provider-register');
    console.log('register');
  }

  onLogin() {
    this.toastService.presentToast(AppMessage.U1004);
    this.router.navigateByUrl('/provider-profile');


  }

}
