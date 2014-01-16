define ["backbone", "jquery", "views/TodoView"], (Backbone, $, TodoView) ->
  class window.TodoListView extends Backbone.View
    className: 'todo-list'
    initialize: ->
      @collection.on 'add', @.addOne, @
      @collection.on 'reset', @.render, @
    addOne: (todoItem) ->
      @collection.add(todoItem)
      todoView = new TodoView(model: todoItem)
      todoView.render()
      @.$el.append(todoView.el)
    alertMe: ->
      alert "wooo"
    # addAll: ->
    #   console.log "yo"
      # @.$el.empty()
      # @collection.forEach @.addOne, @
    render: ->
      @collection.forEach @.addOne, @
