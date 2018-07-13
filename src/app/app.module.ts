  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import {RouterModule ,Routes }from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    TeamComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],    
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'team', component:TeamComponent},
      {path:'about',component:AboutUsComponent},
      {path:'product',component:ProductComponent}
    ])
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

