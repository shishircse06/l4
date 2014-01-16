define ["backbone", "jquery"], (Backbone, $) ->
  class window.TodoHeadView extends Backbone.View
    className: 'todo-header'
    initialize: ->
      @model.on('change', @.render)
      @model.view = this
    events:
      'keypress input#new-todo'   :   'createItem'
    template: _.template(
      '<h1 class="text-center">to-do\'s</h1>' +
      '<p id="total-todos" class="text-center"></p>' +
      '<input id="new-todo" class="input-block-level" type="text" placeholder="What\'s to do?">'
    )
    render: =>
      @.$el.html(@.template())
    createItem: (e) =>
      newItem = @.$el.find('input#new-todo').val()
      # If enter/return is pressed, then create new todo item
      if e.keyCode is 13 then @model.createItem newItem
  # Return TodoHeadView
  TodoHeadView
