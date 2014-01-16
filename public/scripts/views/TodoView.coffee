define ["backbone", "jquery"], (Backbone, $) ->
  class window.TodoView extends Backbone.View
    tagName: 'li'
    className: 'todo-item'
    initialize: ->
      @model.on('change', @.render)
      @model.on('destroy hide', @.remove)
      @model.view = this
    events:
      'click label'             : 'toggleStatus'
      'click .btn-destroy'      : 'destroyItem'
      'click .btn-edit'         : 'revealEdit'
      'keypress .edit-title'    : 'editTitle'
    template: _.template(
      '<label class="checkbox<% if(done === "1") print(" is-done") %>">' +
      '<input type="checkbox"' +
      '<% if(done === "1") print("checked") %>' +
      '><%= title %>' +
      '</label>' +
      '<div class="btn-group">' +
        '<a href="#" class="btn btn-small btn-inverse btn-edit">Edit</a>' +
        '<a href="#" class="btn btn-small btn-danger btn-destroy">Delete</a>' +
      '</div>' +
      '<input type="text" class="edit-title" value="<%= title %>" style="display:none;">'
    )
    render: =>
      attributes = @model.toJSON()
      @.$el.html(@.template(attributes))
    remove: =>
      @.$el.remove()
    toggleStatus: =>
      @model.toggleStatus()
    destroyItem: ->
      @model.destroyItem()
    editTitle: (e) =>
      newTitle = @.$el.find('input.edit-title').val()
      # If enter/return is pressed, then commit new title
      if e.keyCode is 13 then @model.editTitle(newTitle)
    revealEdit: =>
      @.$el.find('input.edit-title').toggle().focus()
  # Return TodoView
  TodoView
