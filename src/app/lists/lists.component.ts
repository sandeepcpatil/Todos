import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/shared/todo.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [TodoService]
})
export class ListsComponent implements OnInit {

  constructor(public toDoService: TodoService) { }

  ngOnInit(): void {
  }

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  alterCheck($key: string, isChecked) {
    this.toDoService.checkOrUncheckTitle($key, !isChecked);
  }

  onDelete($key: string) {
    this.toDoService.removeTitle($key);
  }

}
