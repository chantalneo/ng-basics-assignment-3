import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplayDetails = false;
  clickLogger = [];

  onClickDisplayDetails() {
    this.isDisplayDetails = !this.isDisplayDetails;
    this.clickLogger.push(new Date().toTimeString());
  }

  getColor(index: number) {
    return (index >= 4) ? 'blue' : "none";
  }
}
