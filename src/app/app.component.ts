import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSecret: boolean = false;
  log: Array<string> = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date().toISOString());
  }

}
