import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRegisterComponent } from './provider-register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes : Routes = [
  {
    path: '',
    component: ProviderRegisterComponent
  }
]

@NgModule({
  declarations: [ProviderRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class ProviderRegisterModule { }
