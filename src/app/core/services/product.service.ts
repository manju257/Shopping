import { Injectable } from "@angular/core";
import { Http, Response, Headers,RequestOptions,RequestMethod } from "@angular/http";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/do'; // debug
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import {Configuration} from '../app.constants';

import { Category } from "../../shared/model/category.model";
import { User } from "../../shared/model/user.model";
import { SubCategory } from "../../shared/model/subCategory.model";
import { Products } from "../../shared/model/product.model";
import { Cartdetails } from "../../shared/model/cartdetails.model";
import { ProductRegion } from "../../shared/model/productRegion.model";




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private actionUrl: string;

    // constructor(private http: HttpClient, private _configuration: Configuration) {
    //     this.actionUrl = _configuration.ServerWithApiUrl + 'values/';
    // }
    
    public Categoryitems: Category[];
    public user : User;
    constructor(private _http: Http) {
      //this.actionUrl = _configuration.ServerWithApiUrl + 'values/';
    }
  GetCategoryLists(regionId: number) :Observable<Category[]>  {
   // debugger;
    var objCategory : Category = new Category()
    objCategory.regionId = regionId ;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=utf-8');
      return  this._http.post('http://localhost:54847/api/HomeService/GetCategoryList', objCategory, { headers: headers })
      .map((res: Response) => 
      { 
          return res.json()
      })
  }

  
  GetSubCategoryLists(categoryId: number) :Observable<SubCategory[]>  {
   // debugger;
      var objCategory : Category = new Category()
      objCategory.categoryId = categoryId;
      var headers = new Headers();
      headers.append('Content-Type', 'application/json;charset=utf-8');
        return  this._http.post('http://localhost:54847/api/HomeService/GetSubCategoryList', objCategory, { headers: headers })
        .map((res: Response) => 
        { 
            return res.json()
        })
    }

    GetProductDetails(subcategoryId: number) :Observable<Products[]>  {
     // debugger;
      var objSubCategory : SubCategory = new SubCategory()
      objSubCategory.SubCategoryId = subcategoryId;
      var headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
        return  this._http.post('http://localhost:54847/api/ProductService/GetProductDetails', objSubCategory, { headers: headers })
        .map((res: Response) => 
        { 
            return res.json()
        })
    }

    AddEditProducts(objproduct :Products) :Observable<Products[]>  {
        debugger;
         var headers = new Headers();
         headers.append('Content-Type', 'application/json; charset=utf-8');
           return  this._http.post('http://localhost:54847/api/ProductService/AddEditProductDetails', objproduct, { headers: headers })
           .map((res: Response) => 
           { 
               return res.json()
           })
       }

       AddEditRegionProducts(objproduct :ProductRegion) :Observable<Products[]>  {
        debugger;
         var headers = new Headers();
         headers.append('Content-Type', 'application/json; charset=utf-8');
           return  this._http.post('http://localhost:54847/api/ProductService/AddEditProductRegionDetails', objproduct, { headers: headers })
           .map((res: Response) => 
           { 
               return res.json()
           })
       }

}
