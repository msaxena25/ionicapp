import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  locationArr: any = [1,2,4];

  constructor() { }

  ngOnInit() {
    this.locationArr = [
      {location: 'Vaishali', id: 1, isReadonly: true},
      {location: 'Sector 62, Noida', isReadonly: true}
    ]
  }

  onEditItem(item) {
    item.isReadonly = false;
  }

  onRemoveItem(index) {
      this.locationArr.splice(index,1);
  }

  onAddLocation(){
    this.locationArr.push({location: '', isReadonly: false});
  }

  onSaveLocation() {

  }

}
