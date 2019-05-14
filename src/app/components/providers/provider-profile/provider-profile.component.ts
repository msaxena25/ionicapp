import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.scss'],
})
export class ProviderProfileComponent implements OnInit {
  data: any = {};
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastService: ToastService) {

    this.profileForm = this.formBuilder.group(
      {
        name: [],
        userName: ['', Validators.required],
        mobileNo: ['', Validators.required],
        area: ['', Validators.required],
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
      area: 'Indirapuram, Vaishali, Noida Sector 62',
      city: 'Ghaziabad',
      state: 'UP',
      country: 'India'
    }

    this.profileForm.setValue(this.data);
    this.profileForm.disable();
  }
  onSaveProfile() {
    this.toastService.presentToast();
    this.profileForm.disable();
  }
  onEdit() {
    this.profileForm.enable();
  }

}
