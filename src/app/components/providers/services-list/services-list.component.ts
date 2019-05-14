import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent implements OnInit {

  constructor(private toastService : ToastService) { }
  servicesArr  = [{service: 'AC Repair', amount: 300}, {service: 'Cooler Repair', amount: 250}];

  ngOnInit() {
    
  }

  onAddService(){
    this.servicesArr.push({service: 'Chimney Repair', amount: 350});
  }

  onSaveServices() {
    this.toastService.presentToast();

  }

  onRemoveItem(item) {
    this.toastService.presentToast();
  }

}
