import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title = 'kid';
  task: string = 'yo'

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(this.task);
  }

  getTask(task){
    console.log(task); 
  }

}
