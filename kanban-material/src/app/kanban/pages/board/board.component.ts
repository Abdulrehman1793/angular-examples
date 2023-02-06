import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  boards = [
    {
      name: 'todo',
      tasks: ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'],
    },
    {
      name: 'progress',
      tasks: ['working'],
    },
    {
      name: 'done',
      tasks: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
      ],
    },
    {
      name: 'completed',
      tasks: [
        'Task 01',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
      ],
    },
    {
      name: 'deployed',
      tasks: ['AWS', 'Heroku', 'Firebase', 'Check e-mail', 'Walk dog'],
    },
    {
      name: 'Terminated',
      tasks: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
      ],
    },
    {
      name: 'issues',
      tasks: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
      ],
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log('moveItemInArray', event.container.data);
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('transferArrayItem', event.previousContainer.data);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dropBoard(event: CdkDragDrop<any>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
  }
}
