import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1> <router-outlet> </router-outlet>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}

@Component({
  selector: 'hi',
  template: `<h1>Hi {{name}}!</h1> <router-outlet> </router-outlet>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HiComponent {
  @Input() name: string;
}

@Component({
  selector: 'PageNotFound',
  template: `<h1>Page Not Found {{name}}!</h1> <router-outlet> </router-outlet>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class PageNotFoundComponent {
  @Input() name: string;
}
