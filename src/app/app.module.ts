import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { PercentPipe } from '@angular/common';
import { PercentagePipe } from './percentage.pipe';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateComponent } from './translate/translate.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AddproductComponent } from './addproduct/addproduct.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { DelproductComponent } from './delproduct/delproduct.component';


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,PercentagePipe, ReactiveformsComponent, TranslateComponent, AddproductComponent, GetproductComponent, DelproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,TranslateModule.forRoot({
      loader:{provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
    }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
