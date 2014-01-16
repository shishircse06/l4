define [
  'backbone'
  'jquery'
  '../models/TodoItem'
  '../collections/TodoList'
  '../views/TodoListView'
  '../views/TodoHeadView'
], (Backbone, $, TodoItem, TodoList, TodoListView, TodoHeadView) ->
  window.TodoApp = new (Backbone.Router.extend
    routes:
      '': 'index'

    initialize: ->

      @todoList = new TodoList()

      @todoItem = new TodoItem()

      # Render TodoListView
      @todoListView = new TodoListView(collection: @todoList)
      @todoListView.render()

      # Render TodoHeadView
      @todoHeadView = new TodoHeadView(model: @todoItem)
      @todoHeadView.render()

    index: ->
      @todoList.fetch()
      $('.todo-container').html @todoListView.el
      $('[role="banner"]').html @todoHeadView.el

    start: ->
      Backbone.history.start()

    show: (id) ->
      @todoList.focusOnTodoItem id
  )
