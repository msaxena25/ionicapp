import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderProfileComponent } from './provider-profile.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes = [
  {
    path: '',
    component: ProviderProfileComponent
  }
];

@NgModule({
  declarations: [ProviderProfileComponent],
  imports: [
    CommonModule,
ReactiveFormsModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProviderProfileModule { }
