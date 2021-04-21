import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  // toDoListArray: any[];
  constructor(public toDoService: TodoService) {}

  ngOnInit(): void {
    this.toDoService
      .getToDoList()
      .snapshotChanges()
      .subscribe((item) => {
        this.toDoService.toDoListArray = [];
        item.forEach((element) => {
          var x = element.payload.toJSON();
          x['$key'] = element.key;
          this.toDoService.toDoListArray.push(x);
        });
        this.toDoService.toDoListArray.sort((a, b) => {
          return a.isChecked + b.isChecked;
        });
      });
  }

    showChecked(){
    this.toDoService.checked().snapshotChanges().subscribe(item =>{
      this.toDoService.toDoListArray = []
      item.forEach(element =>{
        var x = element.payload.toJSON()
        if(x['isChecked'] === true){
          this.toDoService.toDoListArray.push(x)
        }
        console.log(x['isChecked'])
      })
      this.toDoService.toDoListArray.sort((a,b) =>{
        return a.isChecked - b.isChecked
      })
    })
  }
  showUnchecked(){
    this.toDoService.checked().snapshotChanges().subscribe(item =>{
      this.toDoService.toDoListArray = []
      item.forEach(element =>{
        var x = element.payload.toJSON()
        if(x['isChecked'] === false){
          this.toDoService.toDoListArray.push(x)
        }
        console.log(x['isChecked'])
      })
      this.toDoService.toDoListArray.sort((a,b) =>{
        return a.isChecked - b.isChecked
      })
    })
  }

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  // alterCheck($key: string, isChecked) {
  //   this.toDoService.checkOrUncheckTitle($key, !isChecked);
  // }

  // onDelete($key: string) {
  //   this.toDoService.removeTitle($key);
  // }
}
