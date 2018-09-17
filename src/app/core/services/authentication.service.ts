import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/do'; // debug
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from "src/app/shared/model/user.model";
//import {Configuration} from '../app.constants';



@Injectable()
export class AuthenticationService {

  private actionUrl: string;

    // constructor(private http: HttpClient, private _configuration: Configuration) {
    //     this.actionUrl = _configuration.ServerWithApiUrl + 'values/';
    // }
    
    public employeeList: Observable<User[]>;
    private _employeeList: BehaviorSubject<User[]>;
    private baseUrl: string;
    private result : string;
    private dataStore: {
    employeeList: User[];
    };
     
    //// Constructor to set the values
    constructor(private _http: Http) {
    // Base URL for the API
    this.baseUrl = '/api/';
    this.dataStore = { 
      
      employeeList: [] };
    
    }
     


    public SignUp(user: User) {
      debugger;
              var headers = new Headers();
              headers.append('Content-Type', 'application/json; charset=utf-8');
              this._http.post('http://localhost:54847/api/AuthenticationService/SignUp', JSON.stringify(user), { headers: headers })
              
              .map(response => response.json())
              .subscribe(data => { 
                            this.result = data;
      }, error => console.log('Could not create todo.'));
      };

}


// console.log('add user : ' + JSON.stringify(user));