import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit,OnChanges {

  @Input() DataTotalAmount: any = [];
  @Output() OnTotalAmount = new EventEmitter();
  query:any={
    TotalAmount:null
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if('DataTotalAmount' in changes){
      // console.log(changes )
      console.log(changes.DataTotalAmount.currentValue )
      this.query.TotalAmount = changes.DataTotalAmount.currentValue
      this.formatMoney(this.query.TotalAmount)
      this.isNumberKey(this.query.TotalAmount)
    }
  }

  isNumberKey(evt: any){
    this.query.TotalAmount = this.formatMoney(this.query.TotalAmount);
    console.log(this.query.TotalAmount );

  }

  formatMoney(number: any) {
    console.log(number);
    this.OnTotalAmount.emit(number)
    return Number(number).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
}
