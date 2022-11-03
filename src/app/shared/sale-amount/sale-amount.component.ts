import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaleAmountComponent implements OnInit {

  @Output() OnSaleAmount = new EventEmitter();
  @Output() OnTaxSaleAmount = new EventEmitter();
  value:any

  query:any={
    saleAmount: 0
  }

  constructor() { }

  ngOnInit(): void {
    this.isNumberKey(this.query.saleAmount )
    this.formatMoney(this.query.saleAmount )

  }

  isNumberKey(evt: any){

    this.query.saleAmount = this.formatMoney(this.query.saleAmount);
    console.log(this.query.saleAmount );


  }

  formatMoney(number: any) {
    console.log(number);
    let calculate = number*0.07
    this.OnSaleAmount.emit(number)
    this.OnTaxSaleAmount.emit(calculate)
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
}
