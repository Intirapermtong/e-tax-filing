import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tax-filing-review',
  templateUrl: './tax-filing-review.component.html',
  styleUrls: ['./tax-filing-review.component.css']
})
export class TaxFilingReviewComponent implements OnInit {

  dataTotal:any
  constructor(
    private location:Location,
    private dataSV:DataService,

  ) { }

  ngOnInit(): void {
    console.log(this.dataSV.data)
    this.dataTotal = this.dataSV.data
    console.log(this.dataTotal)
  }

  back(){

    // Swal.fire({
    //   // title: "HTML <small>Title</small>!",
    //   text: this.dataTotal,
    //   html: true
    // })
    console.log(this.dataTotal)
    this.location.back()
  }

}
