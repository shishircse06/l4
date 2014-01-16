'use strict'
require.config
  paths:
    "jquery": "vendor/jquery/jquery"
    "underscore": "vendor/underscore-amd/underscore"
    "backbone": "vendor/backbone-amd/backbone"

require [
  'views/TodoView'
  'views/TodoHeadView'
  'views/TodoListView'
  'models/TodoItem'
  'collections/TodoList'
  'scripts/router.js'
], (TodoView, TodoHeadView, TodoListView, TodoItem, TodoList, TodoApp) ->

  # Model Instance
  todoItem = new TodoItem

  # View Instance
  todoView = new TodoView(model: todoItem)
  todoView.render()

  # View Header Instance
  todoHeadView = new TodoHeadView(model: todoItem)
  todoHeadView.render()

  # Collection Instance
  todoList = new TodoList
  todoList.fetch()

  # Collection View Instance
  todoListView = new TodoListView(collection: todoList)
  todoListView.render()

  TodoApp.start()
