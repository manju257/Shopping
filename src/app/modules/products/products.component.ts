
import { Component, OnInit,ViewChild,AfterViewInit  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry,MatDialog,MatTableDataSource,MatSort,MatSortable,MatPaginator,MatCheckbox} from '@angular/material';
import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { Category } from 'src/app/shared/model/category.model';
import { SubCategory } from 'src/app/shared/model/subCategory.model';
import { Products } from 'src/app/shared/model/product.model';
import { HomeService } from 'src/app/core/Services/home.service';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myControl = new FormControl();
  objCategory:Category[];
  objSubcategory:SubCategory[];
  objProductDetails:Products[];
  regionId :number;
  StatusMessage : string;
  dataSource;

  constructor(private _homeService: HomeService,iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer, public dialog: MatDialog) {
   iconRegistry.addSvgIcon(
       'thumbs-up',
       sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
 }


  ngOnInit() {
    this.regionId = 1;
    this._homeService.GetCategoryLists(this.regionId)
    .subscribe(
               searchresult => {
                        this.objCategory = searchresult
                   }, 
                   err => {
                     console.log(err);
                   });
  }

displayedColumns = ['ProductID','ProductName','ProductPrice','ProductCartDesc','ProductThumb','ProductVendor']
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

  this._homeService.AddEditProducts(objProduct)
  .subscribe(
             searchresult => {
                 }, 
                 err => {
                   console.log(err);
                 });
}

  
ddlCategoryChange(value)
{
  this._homeService.GetSubCategoryLists(value)
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
  this._homeService.GetProductDetails(value)
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

  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

masterToggle() {
  
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}
show: boolean = false;
AddClick() {
        this.show = !this.show;
        
    }


}
