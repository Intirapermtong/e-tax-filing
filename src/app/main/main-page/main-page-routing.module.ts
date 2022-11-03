import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxFilingDetailComponent } from 'src/app/modules/tax-filing-detail/tax-filing-detail.component';
import { TaxFilingReviewComponent } from 'src/app/modules/tax-filing-review/tax-filing-review.component';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [

  {
    path: '',
    component: TaxFilingDetailComponent,
  },
  {
    path: 'tax-filing-detail',
    component: TaxFilingDetailComponent,
  },
  {
    path: 'tax-filing-reviwe',
    component: TaxFilingReviewComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
