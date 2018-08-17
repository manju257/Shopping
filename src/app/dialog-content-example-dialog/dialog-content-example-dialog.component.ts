import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ,MatRadioButton} from '@angular/material';
import { DialogData } from '../Home/home/home.component';
import { Category } from '../model/Category.model';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent implements OnInit {




  constructor( public dialogRef: MatDialogRef<DialogContentExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {objCategory: DialogData }) {



    }

  

  ngOnInit() {

 
  }

  Save()
  {
         this.dialogRef.close('manju');

  }
    onNoClick(): void {
        this.dialogRef.close();
      }

}
