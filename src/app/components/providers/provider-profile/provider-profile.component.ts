import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AppMessage } from 'src/app/shared/app-message.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.scss'],
})
export class ProviderProfileComponent implements OnInit {
  data: any = {};
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastService: ToastService, private router: Router) {

    this.profileForm = this.formBuilder.group(
      {
        name: [],
        userName: ['', Validators.required],
        mobileNo: ['', Validators.required],
   //    area: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required]

      }
    )

  }

  ngOnInit() {
    this.data = {
      userName: 'msaxena25',
      name: 'Mohit Saxena',
      mobileNo: '987654321',
    // area: 'Indirapuram, Vaishali, Noida Sector 62',
      city: 'Ghaziabad',
      state: 'UP',
      country: 'India'
    }

    this.profileForm.setValue(this.data);
    this.profileForm.disable();
  }
  onSaveProfile() {
    this.toastService.presentToast(AppMessage.U1001);
    this.profileForm.disable();
  }
  onEdit() {
    this.profileForm.enable();
  }

  onLogout(){
    this.router.navigateByUrl('home');
  }

}
