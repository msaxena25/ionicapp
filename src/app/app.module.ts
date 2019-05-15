import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [AppComponent, ProviderLoginComponent],
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
    ProviderSearchModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
