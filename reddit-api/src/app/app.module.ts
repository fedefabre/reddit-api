import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { CoreService } from './services/core.service';
import { HttpClientModule } from '@angular/common/http';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { RightSectionComponent } from './components/right-section/right-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LeftBarComponent,
    RightSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
