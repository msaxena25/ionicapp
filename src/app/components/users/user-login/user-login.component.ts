import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {

  constructor(private storage: Storage, private router: Router, private sService: SharedService) {}

  ngOnInit() { }


  onLogin() {

    // set a key/value
    this.storage.set('isUserLoggedIn', true);
    this.sService.isUserLoggedIn = true;
    this.router.navigateByUrl('search');

  }

}
