import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-example',
  templateUrl: './ng-example.component.html',
  styleUrls: ['./ng-example.component.css']
})
export class NgExampleComponent implements OnInit {

  constructor() { }

  style = false;

  currentStyle = { color: 'red', backgroundColor: 'gray' };

  noStyle = { color: 'white', backgroundColor: 'black' };

  myClass = { circle: this.style, square: !this.style };

  ngOnInit() {
  }

}
