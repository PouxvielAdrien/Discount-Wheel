import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<boolean>();
  // displayDiscount:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  // Todo : link the brand-title to this function
  // onGoHome() {
  //   this.displayDiscount = false;
  //   this.buttonClicked.emit(this.displayDiscount);
  // }
}
