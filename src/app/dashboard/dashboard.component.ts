import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chars: String = '';
  counts: any = {};
  count_cards = [];

  execute() {
    this.counts = {};
    for ( const c in this.chars ) {
      if ( this.chars.hasOwnProperty(c) ){
        if ( !this.counts.hasOwnProperty(this.chars[c]) ) {
          this.counts[this.chars[c]] = 0;
        }
        this.counts[this.chars[c]] += 1;
      }
    }
  }

  update_counts() {
    this.execute();
  }

  constructor() {}
}
