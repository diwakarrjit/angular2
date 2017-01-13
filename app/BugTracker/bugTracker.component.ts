import {Component} from '@angular/core'
import { BugOperations } from './bugOperations.service';
import { LocalStorage } from './localStorage.service';

@Component({
    template:`<h1>Bug Tracker</h1>
<hr>
<section class="content">
	<section class="stats">
		<span class="closed">{{bugTracker.closed}}</span>
		<span> / </span>
		<span>{{bugTracker.bugs.length}}</span>
	</section>
	<section class="sort">
		<label for="">Order By :</label>
		<input type="text" name="" id="">
		<label for="">Descending ? :</label>
		<input type="checkbox" name="" id="">
	</section>
	<section class="edit">
		<label for="">New Bug :</label>
		<input type="text" name="" [(ngModel)]="bugTracker.bug.Title" id="">
		<input type="button" (click)="addBug()" value="Save">
	</section>
	<section class="list">
		<ol>
			<li *ngFor="let bug of localStorage.getAllBugs()">
            	<span (click)="toggleBug(bug)" class="bugname" [ngClass]="{closed:bug.isClosed}" >{{bug.Id}}. {{bug.Title | trimText:40}}</span>
				<div class="datetime">[Created At]</div>
			</li>
		</ol>
		<input type="button" (click)="removeBugs()" value="Remove Closed">
	</section>
</section>
    `,
    selector:'bug-tracker'
})

export class BugTrackerComponent{

constructor(private bugTracker:BugOperations, private localStorage:LocalStorage)
{
this.bugTracker.bugs=this.localStorage.getAllBugs();
}

addBug(){
this.bugTracker.AddBug();
this.localStorage.syncBugs(this.bugTracker.bugs);
}

removeBugs(){
    this.bugTracker.removeBugs();
    this.localStorage.syncBugs(this.bugTracker.bugs);
}

toggleBug(bug:any){
    this.bugTracker.toggle(bug);
this.localStorage.syncBugs(this.bugTracker.bugs);
}

    //bugTracker:BugOperations= new BugOperations();
}

