import { Component, OnInit ,ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators ,NgForm,FormsModule } from '@angular/forms';
import { User } from '../../model/user.model';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
 import { AuthenticationService } from '../../Services/authentication.service';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user: User =   new User();
  form: FormGroup;


  public message: string;
  public values: any[];

  constructor(
     private _authenticationService: AuthenticationService,
      private _toasterService: ToasterService,
      private _slimLoadingBarService: SlimLoadingBarService) {
      this.message = 'Hello from HomeComponent constructor';
  }



  ngOnInit() {
   

    // this._dataService
    //     .getAll<any[]>()
    //     .subscribe((data: any[]) => this.values = data,
    //     error => () => {
    //         this._toasterService.pop('error', 'Damn', 'Something went wrong...');
    //     },
    //     () => {
    //         this._toasterService.pop('success', 'Complete', 'Getting all values complete');
    //         this._slimLoadingBarService.complete();
    //     });
}

    resetForm(form :NgForm)
    {
      form.reset();
      this.user = {
      
        phoneNumber:0,
        email:'',
        password:''

        


      }

    }


  isFieldInvalid(field: string) { // {6}
  
}
onSubmit(userObj:User)
{
  debugger;
  this._authenticationService.SignUp(userObj);
  this._slimLoadingBarService.complete();

}

}
