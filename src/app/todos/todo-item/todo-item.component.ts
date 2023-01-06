import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import * as actions from '../todo.actions';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('localInput') textLocalInput: ElementRef | undefined;
  @Input() todo!: Todo;
  
  public checkCompleted: FormControl = new FormControl();
  public textInput: FormControl = new FormControl();
  public updating: boolean = false;

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  update() {
    this.updating = true;
    this.textInput.setValue(this.todo.text);

    setTimeout(() => {
      this.textLocalInput?.nativeElement.select();
    }, 1);
  }

  endUpdate() {
    this.updating = false;
    if (this.textInput.invalid) { return; }
    if (this.textInput.value === this.todo.text) { return; }
    this.store.dispatch(actions.update({
      id: this.todo.id,
      text: this.textInput.value
    }));
  }

  delete() {
    this.store.dispatch(actions.erase({ id: this.todo.id }));
  }

}
