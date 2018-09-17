import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule,MatCheckboxModule,MatSelectModule,MatInputModule,
   MatDialogModule,MatRadioModule,MatPaginatorModule,MatTableModule} from '@angular/material';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpModule } from '@angular/http';








import {RouterModule,Routes} from "@angular/router";
import {FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/authentication/Login/login.component';
import { MainComponent } from './modules/main/main.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { HomeComponent } from './modules/Home/home/home.component';
import { ProductsComponent } from './modules/products/products.component';
import { RegionalProductsComponent } from './modules/regional-products/regional-products.component';
import { DialogContentExampleDialogComponent } from './modules/dialog-content-example-dialog/dialog-content-example-dialog.component';
import { MaterialModule } from './shared/imports/material.module';
import { AuthenticationService } from './core/Services/authentication.service';
import { HomeService } from './core/Services/home.service';


const appRoutes : Routes =[
  
  {path : 'Login' , component: LoginComponent} ,// {path : 'employee/:id' , component: EmployeeDetailsComponent} ,
  {path : 'Main' , component: MainComponent },
  {path : 'signUp' , component: RegistrationComponent},
  {path : 'Home' , component: HomeComponent},
  {path : 'Products' , component: ProductsComponent},
  {path : 'RegionalProducts' , component: RegionalProductsComponent},
  {path : '' , redirectTo: '/Login', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegistrationComponent,
    HomeComponent,
    DialogContentExampleDialogComponent,
    ProductsComponent,
    RegionalProductsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MaterialModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
   
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatDialogModule,
    MatRadioModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes),

  ],
  entryComponents: [

    DialogContentExampleDialogComponent
  ] ,
  providers: [AuthenticationService,ToasterService,SlimLoadingBarService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
