import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { GreeterComponent }  from './greeter/greeter.component';
import { GreeterMessageComponent }  from './greeter/greeterMessage.component';
import { BugEditComponent} from './BugTracker/bugEdit.component'
import { SalaryCalculatorComponent }  from './salaryCalculator/salaryCalculator.component';
import { BugTrackerComponent }  from './BugTracker/bugTracker.component';
import {BugOperations} from './BugTracker/bugOperations.service';
import {LocalStorage} from './BugTracker/localStorage.service';
import {TrimTextPipe} from './BugTracker/pipes/trimText.pipe'
import {ElapsedPipe} from './BugTracker/pipes/elapsed.pipe'

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,GreeterComponent,GreeterMessageComponent,SalaryCalculatorComponent,BugTrackerComponent,TrimTextPipe,ElapsedPipe,BugEditComponent ],
  bootstrap:    [ AppComponent],
  providers:    [BugOperations,LocalStorage]
})
export class AppModule { }
