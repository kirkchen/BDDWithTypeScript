var App;
(function (App) {
    /// <reference path="Interface/iTodoService.ts" />
    (function (Service) {
        var TodoService = (function () {
            function TodoService() { }
            TodoService.prototype.getAll = function () {
                var defer = $.Deferred();
                $.ajax({
                    url: 'api/todo',
                    contentType: 'application/json',
                    type: 'GET',
                    success: defer.resolve,
                    error: defer.reject
                });
                return defer.promise();
            };
            TodoService.prototype.create = function (todo) {
                var defer = $.Deferred();
                $.ajax({
                    url: 'api/todo',
                    contentType: 'application/json',
                    type: 'POST',
                    data: todo,
                    success: defer.resolve,
                    error: defer.reject
                });
                return defer.promise();
            };
            TodoService.prototype.remove = function (todo) {
                var defer = $.Deferred();
                $.ajax({
                    url: 'api/todo',
                    contentType: 'application/json',
                    type: 'DELETE',
                    data: todo,
                    success: defer.resolve,
                    error: defer.reject
                });
                return defer.promise();
            };
            return TodoService;
        })();
        Service.TodoService = TodoService;        
    })(App.Service || (App.Service = {}));
    var Service = App.Service;
})(App || (App = {}));
//@ sourceMappingURL=todoService.js.map
