import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isChecked = true;
   foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  Favfood ='tacos-2' ;
  constructor() { 
    //alert("con");

  }

  ngOnInit() {

    //alert("init");
  }

  onChange($event){

   //alert("Hi");

  }

}
