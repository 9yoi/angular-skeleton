import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  boards: any;

  constructor(){
    this.boards = [
      {id: 0, header: 'Winnie', tasks: ['Task A in Board 1', 'Task B in Board 1']},
      {id: 1, header: 'April', tasks: ['Task A in Board 2', 'Task B in Board 2']},
      {id: 2, header: 'John', tasks: ['Task A in Board 3', 'Task B in Board 3']},
      {id: 3, header: 'David', tasks: ['Task A in Board 4', 'Task B in Board 4']}
    ]
  }


  openDialog(index){
    const results = window.prompt('Add your text');
    this.boards[index].tasks.push(results);
  }

  moveTask(event) {
    console.log(event, 'in parent')
  }



}
