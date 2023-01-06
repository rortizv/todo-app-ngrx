import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import { cleanTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = ['all', 'completed', 'pending'];
  pendings: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.actualFilter = state.filter;
      this.pendings = state.todos.filter( todo => !todo.completed).length;
    });
  }

  changeFilter(filter: actions.validFilters) {
    this.store.dispatch(actions.setFilter({ filter }));
  }

  clearComleted() {
    this.store.dispatch(cleanTodos());
  }

}
