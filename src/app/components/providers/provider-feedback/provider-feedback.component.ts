import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-feedback',
  templateUrl: './provider-feedback.component.html',
  styleUrls: ['./provider-feedback.component.scss'],
})
export class ProviderFeedbackComponent implements OnInit {
  data: any = {};

  constructor() {
    this.data = {
      rating: 3,
      assignments: 22,
      earning: '2,300'
    }
   }

  ngOnInit() {}

}
