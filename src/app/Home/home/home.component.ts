

import { Component, OnInit,ViewChild,AfterViewInit  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HomeService } from '../../Services/home.service';
import { Category } from '../../model/Category.model';
import { SubCategory } from '../../model/subCategory.model';
import { Products } from '../../model/product.model';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry,MatDialog,MatTableDataSource,MatSort,MatSortable,MatPaginator,MatCheckbox} from '@angular/material';
import { DialogContentExampleDialogComponent } from '../../dialog-content-example-dialog/dialog-content-example-dialog.component';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { User } from '../../model/user.model';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  animal: string;
  name: string;


  myControl = new FormControl();
  objCategory:Category[];
  objSubcategory:SubCategory[];
  objProductDetails:Products[];
  regionId :number;
  StatusMessage : string;


  dataSource;

  displayedColumns = ['ProductID','ProductName','ProductPrice','ProductCartDesc','ProductThumb','ProductVendor']
 
 //displayedColumns = ['ProductID',''];
  @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 selection = new SelectionModel<Products>(true, []);

  constructor(private _homeService: HomeService,iconRegistry: MatIconRegistry,
     sanitizer: DomSanitizer, public dialog: MatDialog) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }


  openDialog() {
   
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
      width: '400px',
      height: '500px;',
      data: this.objCategory 
    });


    dialogRef.afterClosed().subscribe(result => {
      debugger;
      console.log('The dialog was closed');
    this.animal = result;
      //console.log(`Dialog sent: ${vaue}`); 
      //this.dialogRef.close(this.data);
    });

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


  ngAfterViewInit() {
   //  this.dataSource.paginator = this.paginator;

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
               // this.dataSource =  searchresult;
               this.dataSource = new MatTableDataSource(searchresult);
               this.dataSource.sort = this.sort;
               this.dataSource.paginator = this.paginator;

                   }, 
                   err => {
                     console.log(err);
                   });

                   
  }

  isAllSelected() {
    alert("Test");
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    alert("hi");
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
 
    


