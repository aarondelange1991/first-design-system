import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-design-system';

  onDoubleClick(type: string) {
    console.log(`double clicked: ${type}`)
  }
}
