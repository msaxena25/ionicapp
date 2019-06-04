import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProviderLoginComponent } from './components/providers/provider-login/provider-login.component';
import { ProviderProfileModule } from './components/providers/provider-profile/provider-profile.module';
import { HomePageModule } from './home/home.module';
import { ProviderRegisterModule } from './components/providers/provider-register/provider-register.module';
import { FormsModule } from '@angular/forms';
import { ProviderListModule } from './components/providers/provider-list/provider-list.module';
import { ProviderSearchModule } from './components/users/provider-search/provider-search.module';
import { AreaModule } from './components/providers/area/area.module';
import { ProviderHomeModule } from './components/providers/provider-home/provider-home.module';
import { ProviderFeedbackModule } from './components/providers/provider-feedback/provider-feedback.module';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { AppLoadService } from './shared/services/app-load.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FCM } from '@ionic-native/fcm/ngx';


const config = {
  apiKey: "AIzaSyBKfH273zngXN_fssYCaWK3fWfuS60DU4k",
  authDomain: "goman-cb962.firebaseapp.com",
  databaseURL: "https://goman-cb962.firebaseio.com",
  projectId: "goman-cb962",
  storageBucket: "goman-cb962.appspot.com",
  messagingSenderId: "883967587196",
};

export function init_app(appLoadService: AppLoadService) {
  return () => appLoadService.initializeApp();
}

@NgModule({
  declarations: [AppComponent, ProviderLoginComponent, UserLoginComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ProviderProfileModule,
    ProviderRegisterModule,
    HomePageModule,
    FormsModule,
    ProviderListModule,
    ProviderSearchModule,
    ProviderHomeModule,
    ProviderFeedbackModule,
    AreaModule,
    AngularFireModule.initializeApp(config),
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppLoadService], multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    AndroidPermissions,
    FCM
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
