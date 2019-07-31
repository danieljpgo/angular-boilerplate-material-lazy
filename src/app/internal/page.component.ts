import { Component } from '@angular/core';

@Component({
  selector: 'app-internal',
  template: `
    <app-navigations>
        <router-outlet></router-outlet>
    </app-navigations>
  `,
  styles: []
})
export class PageComponent {

  constructor() { }
}
