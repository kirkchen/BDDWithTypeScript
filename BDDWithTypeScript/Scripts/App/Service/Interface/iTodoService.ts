/// <reference path="../../../Libs/jquery.d.ts" />

module App.Service.Interface {
    export interface ITodoService {
        getAll(): JQueryPromise;

        create(todo: string): JQueryPromise;

        remove(todo: string): JQueryPromise;
    }
}