import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  token: string = 'test';

  constructor(private firebase: Firebase,
    private afs: AngularFirestore, private fcm: FCM,
    private platform: Platform) { }

  async getToken() {
    try {
      this.token = await this.fcm.getToken();
      alert(this.token);
    } catch (err) {
      alert(err);
    }
  }

  /*   async getToken() {
      let token;
      alert(this.platform.is('android'));
      if (this.platform.is('android')) {
       try{
        token = await this.firebase.getToken();
        alert(token);
       }catch(err){
          alert(err);
       }
      }
  
      if (this.platform.is('ios')) {
        token = await this.firebase.getToken();
        await this.firebase.grantPermission();
      }
  
      this.saveToken(token);
    }
   */

  private saveToken(token) {
    if (!token) return;

    const devicesRef = this.afs.collection('devices');

    const data = {
      token,
      userId: 'testUserId'
    };

    return devicesRef.doc(token).set(data);
  }

  onNotifications() {
    this.fcm.onNotification().subscribe(
      (data) => {
        if (data.wasTapped) {
          alert("Received in background" + data);
        } else {
          alert("Received in foreground" + data);
        };
        // if (this.platform.is('ios')) {
        //   this.presentToast(msg.aps.alert);
        // } else {
        //   this.presentToast(msg.body);
        // }
      });
  }
}
