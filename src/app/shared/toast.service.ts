import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController : ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      position: 'bottom',
    //  cssClass:"my-custom-class",
      translucent: true
      //color:'primary',
   //   showCloseButton: true
    });
    toast.present();
  }

  hideToast(){
    this.toastController.dismiss();
  }

  // async presentToastWithOptions() {
  //   const toast = await this.toastController.create({
  //     header: 'Toast header',
  //     message: 'Click to Close',
  //     position: 'top',
  //     buttons: [
  //       {
  //         side: 'start',
  //         icon: 'star',
  //         text: 'Favorite',
  //         handler: () => {
  //           console.log('Favorite clicked');
  //         }
  //       }, {
  //         text: 'Done',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   toast.present();
  // }

}
