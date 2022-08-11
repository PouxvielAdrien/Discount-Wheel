import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.css']
})
export class LaunchPageComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<boolean>();
  displayDiscount:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.displayDiscount=true;
    this.buttonClicked.emit(this.displayDiscount);
  }
}
