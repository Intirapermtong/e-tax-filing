import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit,OnChanges {

  @Input() DataTaxAmount: any = [];
  @Output() Onsurcharge = new EventEmitter();
  query:any={
    surcharge:null
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if('DataTaxAmount' in changes){
      // console.log(changes )
      console.log(changes.DataTaxAmount.currentValue )
      this.query.surcharge = changes.DataTaxAmount.currentValue
      this.formatMoney(this.query.surcharge)
      this.isNumberKey(this.query.surcharge)
    }
  }

  isNumberKey(evt: any){
    this.query.surcharge = this.formatMoney(this.query.surcharge);
    console.log(this.query.surcharge );

  }

  formatMoney(number: any) {
    console.log(number);
    this.Onsurcharge.emit(number)
    return Number(number).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

}
