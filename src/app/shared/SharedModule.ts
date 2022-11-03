import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilingTypeComponent } from './filing-type/filing-type.component';
import { MonthComponent } from './month/month.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';
import { SurchargeComponent } from './surcharge/surcharge.component';
import { TaxAmountComponent } from './tax-amount/tax-amount.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { YearComponent } from './year/year.component';
import { LayoutComponent } from '../layout/Users/lalita/Desktop/E-tax-filing/e-tax-filing/src/app/layout/layout.component';
import { DataComponent } from './data/data.component';
import { OnTimeComponent } from './on-time/on-time.component';




@NgModule({
  declarations: [
    FilingTypeComponent,
    MonthComponent,
    PenaltyComponent,
    SaleAmountComponent,
    SurchargeComponent,
    TaxAmountComponent,
    TotalAmountComponent,
    YearComponent,
    LayoutComponent,
    DataComponent,
    OnTimeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FilingTypeComponent,
    MonthComponent,
    PenaltyComponent,
    SaleAmountComponent,
    SurchargeComponent,
    TaxAmountComponent,
    TotalAmountComponent,
    YearComponent,
    LayoutComponent,
    DataComponent,
    OnTimeComponent
  ],
})
export class SharedModule {
}
