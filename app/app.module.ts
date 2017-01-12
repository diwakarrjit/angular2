import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { GreeterComponent }  from './greeter/greeter.component';
import { SalaryCalculatorComponent }  from './salaryCalculator/salaryCalculator.component';
import { BugTrackerComponent }  from './BugTracker/bugTracker.component';
import {BugOperations} from './BugTracker/bugOperations.service';
import {TrimTextPipe} from './BugTracker/pipes/trimText.pipe'

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,GreeterComponent,SalaryCalculatorComponent,BugTrackerComponent,TrimTextPipe ],
  bootstrap:    [ AppComponent ],
  providers:    [BugOperations]
})
export class AppModule { }
