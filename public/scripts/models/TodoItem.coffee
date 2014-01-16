define ['backbone', 'jquery'], (Backbone, $) ->
  class window.TodoItem extends Backbone.Model
    urlRoot: 'todos'
    defaults:
      title: 'Empty to-do'
      done: '0'
    toggleStatus: ->
      if @.get('done') is '0'
        @.set 'done': '1'
      else
        @.set 'done': '0'
      @.save()
    destroyItem: ->
      @.destroy
        wait: true
        success: ->
          console.log "Successfully destroyed todo item"
        error: ->
          console.log "Error destroying todo"
    editTitle: (newTitle) ->
      @.set 'title': newTitle
      @.save()
    createItem: (newItem) ->
      @.urlRoot = 'todos'
      @.set 'title': newItem
      @.save()
