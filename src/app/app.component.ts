import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
