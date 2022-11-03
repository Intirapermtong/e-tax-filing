import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-on-time',
  templateUrl: './on-time.component.html',
  styleUrls: ['./on-time.component.css']
})
export class OnTimeComponent implements OnInit {


  @Output() OnonTime = new EventEmitter();
  query:any={
    onTime:null
  }

  public Time=[
    { id: '01', name: 'On-Time'},
    { id: '01', name: 'Late'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  select(data: any) {
    console.log(this.query);
    this.OnonTime.emit(this.query)
  }

}
