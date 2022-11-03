import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit,OnChanges {

  @Output() Onselectmonth = new EventEmitter();
  query:any={
    month_id:null,
    month_name:null
  }
  public month=[
    { id: '01', name: 'January'},
    { id: '02', name: 'February'},
    { id: '03', name: 'March'},
    { id: '04', name: 'April'},
    { id: '05', name: 'May'},
    { id: '06', name: 'June'},
    { id: '07', name: 'July'},
    { id: '08', name: 'August'},
    { id: '09', name: 'September'},
    { id: '10', name: 'October'},
    { id: '11', name: 'November'},
    { id: '12', name: 'December'},
  ]
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.query)

  }

  ngOnInit(): void {
    // console.log(this.query)
    // this.OnselectYear.emit(this.query)
  }


  select(value:any){
    // console.log(value)
    // console.log(value.value)
    if(value == '01'){ this.query.month_name = 'January'}
    if(value.value == '02'){ this.query.month_name = 'February'}
    if(value.value == '03'){ this.query.month_name = 'March'}
    if(value.value == '04'){ this.query.month_name = 'April'}
    if(value.value == '05'){ this.query.month_name = 'May'}
    if(value.value == '06'){ this.query.month_name = 'June'}
    if(value.value == '07'){ this.query.month_name = 'July'}
    if(value.value == '08'){ this.query.month_name = 'August'}
    if(value.value == '09'){ this.query.month_name = 'September'}
    if(value.value == '10'){ this.query.month_name = 'October'}
    if(value.value == '11'){ this.query.month_name = 'November'}
    if(value.value == '12'){ this.query.month_name = 'December'}
    // console.log(this.query)
    this.Onselectmonth.emit(this.query)

  }

}
