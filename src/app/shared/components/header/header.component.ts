import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MaterialModule],
})
export class HeaderComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
