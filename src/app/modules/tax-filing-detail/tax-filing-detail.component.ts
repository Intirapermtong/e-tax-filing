import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Stepper from 'bs-stepper';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tax-filing-detail',
  templateUrl: './tax-filing-detail.component.html',
  styleUrls: ['./tax-filing-detail.component.css']
})
export class TaxFilingDetailComponent implements OnInit {

  @ViewChild('bsStepper', { static: false }) stepperElement!: ElementRef<any>;
  public stepper!: Stepper;
  checkStep = 1;

  dataTax:any ={
    filingType:'0',
    month:null,
    month_name:null,
    year:null,
    saleAmount:null,
    taxAmount:null,
    surcharge:null,
    penalty:200,
    totalAmount:null,
    Time:null
  }
  DataTotal:any
  DataSaleAmount:number = 0
  DataTaxAmount:number = 0
  DataTotalAmount:number = 0
  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private dataSV:DataService
  ) { }

  ngOnInit(): void {
    this.calTotalTax();
    console.log('Start*******');
    console.log(this.dataTax);
  }

  ngAfterViewInit() {
    this.stepper = new Stepper(this.stepperElement.nativeElement, {
      linear: false,
      animation: true
    });
  }

  Onselectmonth(queryMonth:any){
    console.log(queryMonth)
    this.dataTax.month = queryMonth.month_id
    this.dataTax.month_name = queryMonth.month_name
  }

  OnselectYear(queryYear:any){
    console.log(queryYear)
    this.dataTax.year = queryYear.year_name
  }


  OnSaleAmount(querySaleAmount:number){
    console.log(querySaleAmount)
    this.dataTax.saleAmount = querySaleAmount


  }

  OnonTime(queryTime:any){
    console.log(queryTime)
    this.dataTax.Time = queryTime.ontime
  }

  OnTaxSaleAmount(queryTaxSaleAmount:number){
    console.log(queryTaxSaleAmount)
    this.DataSaleAmount = queryTaxSaleAmount
    this.DataTaxAmount = queryTaxSaleAmount * 0.01
    this.cdRef.detectChanges()
    console.log(this.DataSaleAmount)
    this.dataTax.taxAmount = queryTaxSaleAmount
  }

  OnfilingType(queryfilingType:any){
    console.log(queryfilingType)
    this.dataTax.filingType = queryfilingType


  }

  Onsurcharge(querysurcharge:number){
    console.log(querysurcharge)
    this.dataTax.surcharge = querysurcharge

  }

  OnTaxAmount(queryTaxAmount:number){
    console.log(queryTaxAmount)
    this.dataTax.taxAmount = queryTaxAmount
    this.calTotalTax();
  }


  calTotalTax(){
    let calculater
    console.log('calTotalTax:::::::');
    console.log('taxAmount = ' + this.dataTax.taxAmount);
    console.log('surcharge = ' + this.dataTax.surcharge);
    console.log('penalty = ' + this.dataTax.penalty);

    calculater = (this.dataTax.taxAmount + this.dataTax.surcharge + this.dataTax.penalty)
    console.log('calculater =  ' + calculater)
    this.DataTotalAmount = calculater
  }

  OnTotalAmount(queryTotalAmount:number){
    console.log(queryTotalAmount)
    this.dataTax.totalAmount = queryTotalAmount
    this.calTotalTax()
  }

  next(){
    console.log('----------next step--------------------');
    let filingType = this.dataTax.filingType;
    let month =  this.dataTax.month;
    let year = this.dataTax.year;
    let saleAmount = parseInt(this.dataTax.saleAmount);
    let taxAmount = this.dataTax.taxAmount;

    console.log('filingType::: ' + filingType);
    console.log('month::: ' + month);
    console.log('year::: ' + year);
    console.log('saleAmount::: ' + saleAmount);
    console.log('taxAmount::: ' + taxAmount);

    if(filingType !== null && month !== null && year !== null && saleAmount > 0 && taxAmount > 0 ) {
      this.dataSV.data = this.dataTax
      this.checkStep = 2;
      this.stepper.next();
      // this.router.navigate(['/main/tax-filing-reviwe'])
    }
    else  {
      window.alert('Invalid Data');
    }
  }

  view(){
    console.log(this.dataTax)
  }

}
