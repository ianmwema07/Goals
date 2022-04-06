import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Goal } from 'src/app/goal';
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal = new Goal(4,"Solve math Homework", "I have to try these sums", new Date(2030,3,14));
  @Output() isComplete = new EventEmitter<boolean>();
 
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
