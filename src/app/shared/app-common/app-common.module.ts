import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule
    
  ],
  exports:[
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule
  ]
})
export class AppCommonModule { }
