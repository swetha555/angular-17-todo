import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../shared/material.imports';
import { AsyncPipe, DatePipe } from '@angular/common';
import { DataService } from '../../data/data.service';
import { Observable } from 'rxjs';

export interface Section {
  name: string;
  updated: Date;
}
export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  updated: Date;
}


@Component({
  selector: 'app-todo-list',
  imports: [...MATERIAL_IMPORTS, DatePipe, AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  listItems: TodoItem[] = [];
 listItems$: Observable<TodoItem[]>;
  constructor(public dataService : DataService){
    // this.dataService.getTodoList().subscribe((data => this.listItems = data));
    this.listItems$ = this.dataService.getTodoList();

  }
}
