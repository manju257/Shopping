

import { Component, OnInit,ViewChild,AfterViewInit  } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Products } from 'src/app/shared/model/product.model';
import { Cartdetails } from 'src/app/shared/model/cartdetails.model';
import { HomeService } from 'src/app/core/Services/home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  objProductDetails:Products[];
  objShoppingcart : Cartdetails;

  constructor(private _HomeService : HomeService   ) {

  }



  ngOnInit() {

    this._HomeService.GetProductDetails(7)
    .subscribe(
               searchresult => {
             this.objProductDetails = searchresult;
                   },
                   err => {
                     console.log(err);
                   });


  }

  addtoCart()
  {

    this.objShoppingcart = new Cartdetails();
     this.objShoppingcart.CustomerId= "manju";

   

    this._HomeService.addtoCartService(this.objShoppingcart).subscribe(
      searchresult => {
   // this.objProductDetails = searchresult;
          },
          err => {
            console.log(err);
          });

  }

 


}
