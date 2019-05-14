import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-register',
  templateUrl: './provider-register.component.html',
  styleUrls: ['./provider-register.component.scss'],
})
export class ProviderRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onRegister(){
    this.router.navigateByUrl('/provider-profile');
  }

}
