import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  @Input()
  tasks: string[];
  @Input()
  header: string;
  @Input()
  id: number;

  @Output() moveTask: EventEmitter<any> = new EventEmitter();

  constructor() {
    // this.tasks = ["TaskA", "TaskB"];

  }

  ngOnInit() {
    console.log(this.id)
  }


  moveLeft(boardIndex, taskIndex) {
    this.moveTask.emit({toCol: boardIndex - 1, fromCol: boardIndex, originalTaskIndex: taskIndex})
  }

  moveRight(boardIndex, taskIndex) {
    this.moveTask.emit({ toCol: boardIndex + 1, fromCol: boardIndex, originalTaskIndex: taskIndex })
  }
}
