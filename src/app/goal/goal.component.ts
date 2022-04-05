import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    {id:1, name:"Watch finding Nemo",description:"Well this has been advertised over and over again in main stream media"},
    {id:2, name:"Buy Cookies", description:"There are these Brown cookies that I'd like to try out"},
    {id:3, name:"Get new Phone case", description:"The way things are going I will destroy this phone"},
    {id:4, name:"Solve math Homework", description:"I have to try these sums"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
