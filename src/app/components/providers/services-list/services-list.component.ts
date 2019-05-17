import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastService } from '../../../shared/services/toast.service';
import { AppMessage } from 'src/app/shared/app-message.enum';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent implements OnInit {
  showSelect : any = {};
  @ViewChild('mySelect') selectRef: any;
  constructor(private toastService: ToastService) { }
  servicesArr = [{ service: 'AC Repair', amount: 300 }, { service: 'Cooler Repair', amount: 250 }];

  ngOnInit() {

  }

  onClickService(index) {
    this.showSelect[index] = true;
    this.selectRef.open();
  }

  onAddService() {
    this.servicesArr.push({ service: 'Chimney Repair', amount: 350 });
  }

  onSaveServices() {
    this.toastService.presentToast(AppMessage.U1002);

  }

  onRemoveItem(item) {
    this.toastService.presentToast(AppMessage.U1003);
  }

}
