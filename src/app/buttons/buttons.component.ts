import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo/shared/todo.service'

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  providers: [TodoService],
})

export class ButtonsComponent implements OnInit {
  constructor(public toDoService: TodoService) { }

  ngOnInit(): void {
  }

  showAll(){
    this.toDoService.getToDoList().snapshotChanges().subscribe(item =>{
      this.toDoService.toDoListArray = [];
      item.forEach(element =>{
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoService.toDoListArray.push(x)
      })
      this.toDoService.toDoListArray.sort((a,b) =>{
        return a.isChecked + b.isChecked
      })
    })

  }

  showChecked():void {
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
    this.toDoService.unchecked().snapshotChanges().subscribe(item =>{
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
}
