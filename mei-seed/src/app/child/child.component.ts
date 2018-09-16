import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  title = 'kid';
  tasks: string[] = ['taskA', 'taskB', 'taskC']

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.tasks.push(form.value.task);
  }

  hey(){
    console.log('hey');
  }

}
