import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.scss'],
})
export class ProviderLoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  onNewRegister() {
    this.router.navigateByUrl('/provider-register');
    console.log('register');
  }

  onLogin() {
    
  }

}
