/// <reference path="../App/Service/todoService.ts" />
/// <reference path="../Libs/jasmine.d.ts" />
describe('Todo Service', function () {
    it('Get All', function () {
        var service = new App.Service.TodoService();
        spyOn($, 'ajax').andCallFake(function (param) {
            if(param.url === 'api/todo' && param.type === 'GET' && !param.data) {
                param.success([
                    'Test1', 
                    'Test2', 
                    'Test3'
                ]);
            } else {
                throw new Error('Invalid Operation');
            }
        });
        runs(function () {
            service.getAll().done(function (result) {
                expect(result.length).toEqual(3);
            });
        });
    });
    it('Create', function () {
        var service = new App.Service.TodoService();
        spyOn($, 'ajax').andCallFake(function (param) {
            if(param.url === 'api/todo' && param.type === 'POST' && param.data) {
                param.success();
            } else {
                throw new Error('Invalid Operation');
            }
        });
        var callback = jasmine.createSpy('create callback');
        service.create('Test1').done(callback);
        runs(function () {
            expect(callback).toHaveBeenCalled();
        });
    });
    it('Remove', function () {
        var service = new App.Service.TodoService();
        spyOn($, 'ajax').andCallFake(function (param) {
            if(param.url === 'api/todo' && param.type === 'DELETE' && param.data) {
                param.success();
            } else {
                throw new Error('Invalid Operation');
            }
        });
        var callback = jasmine.createSpy('delete callback');
        service.remove('Test1').done(callback);
        runs(function () {
            expect(callback).toHaveBeenCalled();
        });
    });
});
//@ sourceMappingURL=service.spec.js.map
