import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-richnode',
  templateUrl: './richnode.component.html',
  styleUrls: ['./richnode.component.css']
})
export class RichnodeComponent implements OnInit {
  test = ""

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    console.log("test ", this.test, typeof this.test)
  }

}
