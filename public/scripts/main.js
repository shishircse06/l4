'use strict';
require.config({
  paths: {
    "jquery": "vendor/jquery/jquery",
    "underscore": "vendor/underscore-amd/underscore",
    "backbone": "vendor/backbone-amd/backbone"
  }
});

require(['views/TodoView', 'views/TodoHeadView', 'views/TodoListView', 'models/TodoItem', 'collections/TodoList', 'scripts/router.js'], function(TodoView, TodoHeadView, TodoListView, TodoItem, TodoList, TodoApp) {
  var todoHeadView, todoItem, todoList, todoListView, todoView;
  todoItem = new TodoItem;
  todoView = new TodoView({
    model: todoItem
  });
  todoView.render();
  todoHeadView = new TodoHeadView({
    model: todoItem
  });
  todoHeadView.render();
  todoList = new TodoList;
  todoList.fetch();
  todoListView = new TodoListView({
    collection: todoList
  });
  todoListView.render();
  return TodoApp.start();
});
