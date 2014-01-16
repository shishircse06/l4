define(['backbone', 'jquery', '../models/TodoItem', '../collections/TodoList', '../views/TodoListView', '../views/TodoHeadView'], function(Backbone, $, TodoItem, TodoList, TodoListView, TodoHeadView) {
  return window.TodoApp = new (Backbone.Router.extend({
    routes: {
      '': 'index'
    },
    initialize: function() {
      this.todoList = new TodoList();
      this.todoItem = new TodoItem();
      this.todoListView = new TodoListView({
        collection: this.todoList
      });
      this.todoListView.render();
      this.todoHeadView = new TodoHeadView({
        model: this.todoItem
      });
      return this.todoHeadView.render();
    },
    index: function() {
      this.todoList.fetch();
      $('.todo-container').html(this.todoListView.el);
      return $('[role="banner"]').html(this.todoHeadView.el);
    },
    start: function() {
      return Backbone.history.start();
    },
    show: function(id) {
      return this.todoList.focusOnTodoItem(id);
    }
  }));
});
