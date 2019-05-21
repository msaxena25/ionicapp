import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from '../components/rating/rating.component';


@NgModule({
  declarations: [RatingComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule
    
  ],
  exports:[
    RatingComponent,
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule
  ]
})
export class AppCommonModule { }
