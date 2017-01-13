import {Bug} from './models/Bug'


export class BugOperations{
 
 ///******Variable declarations */
 bugs:Array<Bug>=[];
 bug:Bug= new Bug();
 closed:number=this.bugs.filter(x=>x.isClosed).length;
 

 ///***********Functions */
AddBug(){
    let newBug:Bug={Id:this.bugs.length+1,  Title:this.bug.Title,isClosed:false};
    this.bugs.push(newBug);
    this.bug=new Bug();
    localStorage.setItem("bugs", JSON.stringify(this.bugs));
}

toggle(bug:Bug){
//bug.isClosed=!bug.isClosed;
let currentBug=this.bugs.filter(x=>x.Id==bug.Id)[0];
currentBug.isClosed=!currentBug.isClosed;
this.closed=this.bugs.filter(x=>x.isClosed).length;
}

removeBugs()
{
    this.bugs=this.bugs.filter(x=>!x.isClosed);
    this.closed=this.bugs.filter(x=>x.isClosed).length;
}

 }



