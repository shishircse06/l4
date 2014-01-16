define ["backbone", "jquery", "../models/TodoItem"], (Backbone, $, TodoItem) ->
  class window.TodoList extends Backbone.Collection
    model: TodoItem
    url: 'todos/'
    # Filter list to all remaining incomplete todo items
    initialize: ->
      @.on "remove", @.hideModel
    hideModel: (model)->
      model.trigger "hide"
