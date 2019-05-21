import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  data: any = {};

  constructor(private storage: Storage, private router: Router) {

    this.data = {
      name: 'Mohit Saxena',
      mobileNo: '987654321',
      address: 'A21, 89/B, Nyay Khand 2, Indirapuram, Noida, UP'
    }
   }

  ngOnInit() {}

  onSignout(){
    this.storage.set('isUserLoggedIn', false);
    this.router.navigateByUrl('home');

  }

}
