/// <reference path="../../Libs/knockout.d.ts" />

module App.ViewModel {
    export class TodoViewModel {
        _dataSource = ['Test1', 'Test2', 'Test3'];

        todoList: KnockoutObservableArray;

        newTodoContent: KnockoutObservableString;

        constructor() {
            this.todoList = ko.observableArray();
            this.newTodoContent = ko.observable();

            this.loadAllTodos();

            this.removeTodo = (todo: string) => {
                this.todoList.remove(todo);

                this._dataSource = ko.toJS(this.todoList());

                this.loadAllTodos();
            }
        }

        loadAllTodos() {
            this.todoList.removeAll();

            for (var i = 0; i < this._dataSource.length; i++) {
                this.todoList.push(this._dataSource[i]);
            }
        }

        createNewTodo() {
            this._dataSource.push(this.newTodoContent());

            this.loadAllTodos();
        }

        removeTodo: Function;
    }
}