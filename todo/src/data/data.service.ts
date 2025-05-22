import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTodoList(){
    const listItems = [
        {
          id: 1,
          text: 'Get to work',
          completed: false,
          updated: new Date('1/1/16'),
        },
        {
          id: 2,
          text: 'Pick up groceries',
          completed: true,
          updated: new Date('1/17/16'),
        },
        {
          id: 3,
          text: 'Go home',
          completed: false,
          updated: new Date('1/28/16'),
        },
        {
          id: 4,
          text: 'Fall asleep',
          completed: true,
          updated: new Date('2/20/16'),
        },
      ]
   return of(listItems)
  }
}
