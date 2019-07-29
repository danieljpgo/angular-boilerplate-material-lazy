import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal',
  template: `
    <app-navigations>
        <router-outlet></router-outlet>
    </app-navigations>
  `
  // style: []
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
