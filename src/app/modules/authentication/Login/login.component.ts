import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/model/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


//import { AuthService } from './../auth/auth.service';
export class LoginComponent implements OnInit {

    user: User;
    form: FormGroup;
 
  constructor( private fb: FormBuilder,  private route: Router) {

  }
  title = 'Landing page';

  ngOnInit() {
    this.form = this.fb.group({     // {5}
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  isFieldInvalid(field: string) { // {6}
  
}

onSubmit() {
               // {8}
  }

  signUp()
  {

    this.route.navigate(['signUp']);
  }

}
