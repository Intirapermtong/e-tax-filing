import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit,OnChanges {

  // flag = true
  @Output() OnfilingType = new EventEmitter();
  query={
    filing_type_id:'0'
  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log(this.query)
    // console.log(this.flag)
  }

  click0(event:any){
    // console.log(event)
    if(event){
      // this.flag = true
      this.query.filing_type_id = '0'
      this.OnfilingType.emit(this.query.filing_type_id)
    }
    // console.log(this.flag)
  }

  click1(event:any){
    // console.log(event)
    if(event){
      // this.flag = false
      this.query.filing_type_id = '1'
      this.OnfilingType.emit(this.query.filing_type_id)
    }
    // console.log(this.flag)
  }


}
