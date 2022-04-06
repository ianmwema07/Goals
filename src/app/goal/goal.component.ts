import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    
    new Goal(1,"Watch finding Nemo","Well this has been advertised over and over again in main stream media", new Date(2015,3,14)),
    new Goal(2,"Buy Cookies", "There are these Brown cookies that I'd like to try out", new Date(2010,3,14)),
    new Goal(3,"Get new Phone case", "The way things are going I will destroy this phone", new Date(2000,3,14)),
    new Goal(4,"Solve math Homework", "I have to try these sums", new Date(2020,3,14)),
  ];


  toggleDetails(index:number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
