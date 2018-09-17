import { Component, OnInit,ViewChild,AfterViewInit  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry,MatDialog,MatTableDataSource,MatSort,MatSortable,MatPaginator,MatCheckbox} from '@angular/material';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { Category } from 'src/app/shared/model/category.model';
import { SubCategory } from 'src/app/shared/model/subCategory.model';
import { Products } from 'src/app/shared/model/product.model';
import { ProductRegion } from 'src/app/shared/model/productRegion.model';
import { ProductService } from 'src/app/core/Services/product.service';
import { DialogContentExampleDialogComponent } from 'src/app/modules/dialog-content-example-dialog/dialog-content-example-dialog.component';


@Component({
  selector: 'app-regional-products',
  templateUrl: './regional-products.component.html',
  styleUrls: ['./regional-products.component.css']
})
export class RegionalProductsComponent implements OnInit {
  myControl = new FormControl();
  objCategory:Category[];
  objSubcategory:SubCategory[];
  objProductDetails:Products[];
  regionId :number;
  StatusMessage : string;
  dataSource;
  varProductslst : string ;
objregionalProducts :ProductRegion;


  constructor(private _ProductService : ProductService , iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer, public dialog: MatDialog) {
   iconRegistry.addSvgIcon(
       'thumbs-up',
       sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
 }

 
 ngOnInit() {
  this.regionId = 1;
  this._ProductService.GetCategoryLists(this.regionId)
  .subscribe(
             searchresult => {
                      this.objCategory = searchresult
                 }, 
                 err => {
                   console.log(err);
                 });
}

displayedColumns = ['select','ProductID','ProductName','ProductPrice','ProductCartDesc','ProductThumb','ProductVendor']
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
selection = new SelectionModel<Products>(true, []);


openDialog() {
 
const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
  width: '400px',
  height: '500px;',
  data: this.objCategory 
});


dialogRef.afterClosed().subscribe(result => {
  this.AddEditProduct(result);
});
}


AddEditProduct(objProduct)
{
debugger
objProduct.Flag = 1 ;
objProduct.SubCategoryId =7;
objProduct.ProductImage = null;

this._ProductService.AddEditProducts(objProduct)
.subscribe(
           searchresult => {
               }, 
               err => {
                 console.log(err);
               });
}


ddlCategoryChange(value)
{
this._ProductService.GetSubCategoryLists(value)
.subscribe(
           searchresult => {
                    this.objSubcategory =  searchresult
                
               }, 
               err => {
                 console.log(err);
               });
}

ddlSubCategoryChange(value)
{
// debugger;
this._ProductService.GetProductDetails(value)
.subscribe(
           searchresult => {
         
           this.dataSource = new MatTableDataSource(searchresult);
           this.dataSource.sort = this.sort;
           this.dataSource.paginator = this.paginator;
               }, 
               err => {
                 console.log(err);
               });
}

isAllSelected() {
//debugger;
const numSelected = this.selection.selected.length;
const numRows = this.dataSource.data.length;
return numSelected === numRows;
}

masterToggle() {
debugger;
this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
}


addRegionProducts()
{

  debugger;
  this.objregionalProducts = new ProductRegion()

        this.varProductslst = "";
        this.selection.selected.forEach(element => {
        this.varProductslst +=   element.ProductID.toString() + '|';
        this.objregionalProducts.ProductID = this.varProductslst;
        this.objregionalProducts.SubCategoryID =  element.SubCategoryId;
      this.objregionalProducts.RegionId =  element.SubCategoryId;
        });



        this._ProductService.AddEditRegionProducts(this.objregionalProducts)
        .subscribe(
                  searchresult => {
                            //this.objSubcategory =  searchresult
                        ;
                      }, 
                      err => {
                        console.log(err);
                      });



}



}


