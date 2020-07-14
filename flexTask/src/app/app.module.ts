import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DefaultModule } from './layouts/default/default.module';
import { HeaderComponent } from './shared/components/header/header.component';

import { FooterComponent } from './shared/components/footer/footer.component';
import { HiComponent } from './hi/hi.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KishoreComponent } from './kishore/kishore.component';
import { FooterNewComponent } from './footer-new/footer-new.component';
import { SideComponent } from './side/side.component';


@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    KishoreComponent,
    FooterNewComponent,
    SideComponent,
 
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FlexLayoutModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
