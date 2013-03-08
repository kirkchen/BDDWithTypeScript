/// <reference path="../App/ViewModel/todoViewModel.ts" />
/// <reference path="../Libs/jasmine.d.ts" />
describe('Todo App', function () {
    it('進入畫面時顯示所有代辦事項', function () {
        var model = new App.ViewModel.TodoViewModel();
        expect(model.todoList().length).toEqual(3);
    });
    it('輸入內容並點擊”新增“按鈕，新增代辦事項', function () {
        var model = new App.ViewModel.TodoViewModel();
        model.newTodoContent('Test4');
        model.createNewTodo();
        expect(model.todoList().length).toEqual(4);
    });
    it('點選代辦事項旁的”刪除”按鈕，刪除代辦事項', function () {
        var model = new App.ViewModel.TodoViewModel();
        model.removeTodo('Test1');
        expect(model.todoList().length).toEqual(2);
    });
});
//@ sourceMappingURL=viewmodel.spec.js.map
