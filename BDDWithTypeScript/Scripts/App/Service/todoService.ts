/// <reference path="Interface/iTodoService.ts" />

module App.Service {
    export class TodoService implements App.Service.Interface.ITodoService {
        getAll() {
            var defer = $.Deferred();

            $.ajax({
                url: 'api/todo',
                contentType: 'application/json',
                type: 'GET',
                success: defer.resolve,
                error: defer.reject
            });

            return defer.promise();
        }

        create(todo: string) {
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
        }

        remove(todo: string) {
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
        }
    }
}