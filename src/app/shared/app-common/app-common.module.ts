import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from '../components/rating/rating.component';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [RatingComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    IonicStorageModule.forRoot()
    
  ],
  exports:[
    RatingComponent,
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    IonicStorageModule
  ]
})
export class AppCommonModule { }
