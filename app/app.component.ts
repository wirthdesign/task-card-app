import { Component } from '@angular/core';

import { Task } from './model/task';

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
  private tasks = [
    new Task (
      "Buy a pizza",
      false
    ),
    new Task (
      "Walk like a pirate",
      false
    )
  ]
  private currentTask = new Task(null, false);

  addTask() {
    let task = new Task(this.currentTask.content, this.currentTask.completed);
    this.tasks.push(task);
    // Clear the input
    this.currentTask.content = null;
  }
}
