import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isUserLoggedIn: boolean = false;
  isProviderLoggedIn: boolean = false;

  constructor() { }
}
