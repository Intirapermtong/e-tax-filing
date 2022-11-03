import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/app/shared/SharedModule';
import { MainPageRoutingModule } from './main-page-routing.module';
import { TaxFilingDetailComponent } from 'src/app/modules/tax-filing-detail/tax-filing-detail.component';
import { TaxFilingReviewComponent } from 'src/app/modules/tax-filing-review/tax-filing-review.component';


@NgModule({
  declarations: [
    MainPageComponent,
    TaxFilingDetailComponent,
    TaxFilingReviewComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule { }
