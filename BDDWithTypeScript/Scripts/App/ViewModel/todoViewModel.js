var App;
(function (App) {
    /// <reference path="../../Libs/knockout.d.ts" />
    (function (ViewModel) {
        var TodoViewModel = (function () {
            function TodoViewModel() {
                var _this = this;
                this._dataSource = [
                    'Test1', 
                    'Test2', 
                    'Test3'
                ];
                this.todoList = ko.observableArray();
                this.newTodoContent = ko.observable();
                this.loadAllTodos();
                this.removeTodo = function (todo) {
                    _this.todoList.remove(todo);
                    _this._dataSource = ko.toJS(_this.todoList());
                    _this.loadAllTodos();
                };
            }
            TodoViewModel.prototype.loadAllTodos = function () {
                this.todoList.removeAll();
                for(var i = 0; i < this._dataSource.length; i++) {
                    this.todoList.push(this._dataSource[i]);
                }
            };
            TodoViewModel.prototype.createNewTodo = function () {
                this._dataSource.push(this.newTodoContent());
                this.loadAllTodos();
            };
            return TodoViewModel;
        })();
        ViewModel.TodoViewModel = TodoViewModel;        
    })(App.ViewModel || (App.ViewModel = {}));
    var ViewModel = App.ViewModel;
})(App || (App = {}));
//@ sourceMappingURL=todoViewModel.js.map
