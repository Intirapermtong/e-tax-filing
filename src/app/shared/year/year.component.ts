import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  @Output() OnselectYear = new EventEmitter();
  years: String[] = [];
  yearSelect: String = '';

  query={
    year_name:null
  }
  constructor() { }

  ngOnInit(): void {
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear();

    for (let i = 2020; i < currentYear; i++) {
      let y = i.toString();
      this.years.push(y);
    }

    console.log(this.years);
  }

  select(data: any) {
    console.log(this.query);
    this.OnselectYear.emit(this.query)
  }

}
