import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})

/**
 * help Lik: https://medium.com/@mikeyny/creating-an-angular-ionic-rating-component-e616f3e11300
 */
export class RatingComponent implements OnInit {
  @Input() rating: number;  // rating comes from parent component
  @Input() readOnly: boolean = false; // If we have to just display rating mark readOnly true from parent comp.
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  rate(num) {
    this.rating = num;
    this.ratingChange.emit(this.rating);
  }

  /**
   *  1-2 stars: red
            3 stars  : yellow
            4-5 stars: green 
   * @param num - rate number
   */
  getColor(num) {
    if (num > this.rating) {
      return 'gray';
    }

    switch (this.rating) {
      case 1:
      case 2:
        return 'red';
      case 3:
      case 4:
      case 5:
        return 'green';
      default:
        return 'gray';
    }

  }

}
