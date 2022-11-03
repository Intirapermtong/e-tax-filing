import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SaleAmountComponent } from '../sale-amount/sale-amount.component';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit,OnChanges {

  @Input() DataSaleAmount: any = [];
  @Output() OnTaxAmount = new EventEmitter();
  value:any
  saleAmount:any
  query:any={
    taxAmount:null
  }

  constructor(
    public location: Location

  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if('DataSaleAmount' in changes){
      // console.log(changes )
      console.log(changes.DataSaleAmount.currentValue )
      this.query.taxAmount = changes.DataSaleAmount.currentValue
      this.formatMoney(this.query.taxAmount)
      this.isNumberKey(this.query.taxAmount)
    }
  }

  ngOnInit(): void {
  }

  isNumberKey(evt: any){
    this.query.taxAmount = this.formatMoney(this.query.taxAmount);
    console.log(this.query.taxAmount );
    this.OnTaxAmount.emit(this.query.taxAmount)

  }

  formatMoney(number: any) {
    console.log(number);

    return Number(number).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  }

  check(evt: any) {
    console.log('check number:::::::');
    console.log(evt.value);
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    console.log('charCode:::: ' + charCode);
    if(charCode == 46){
      return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
      return false;
    }else{
      return true;
    }
  }

  next(){

  }
}
