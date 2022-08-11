import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  discount:boolean|null=null;

  onClick(value:boolean){
    this.discount=value;
  }

  onTryAgain(value:boolean){
    this.discount=value;
  }
}
