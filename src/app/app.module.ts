import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomProgressBarComponentComponent } from './components/custom-progress-bar-component/custom-progress-bar-component.component';
import { CustomProgressBarComponent2Component } from './components/custom-progress-bar-component2/custom-progress-bar-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomProgressBarComponentComponent,
    CustomProgressBarComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
