import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MAX_DISCOUNT_NUMBER} from "../_core";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  getRandomDiscountValue(){
    return Math.floor(Math.random() * (MAX_DISCOUNT_NUMBER + 1));
  }

  onTryAgain() {
    this.getRandomDiscountValue()
  }
}
