var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["backbone", "jquery"], function(Backbone, $) {
  var _ref;
  window.TodoView = (function(_super) {
    __extends(TodoView, _super);

    function TodoView() {
      this.revealEdit = __bind(this.revealEdit, this);
      this.editTitle = __bind(this.editTitle, this);
      this.toggleStatus = __bind(this.toggleStatus, this);
      this.remove = __bind(this.remove, this);
      this.render = __bind(this.render, this);
      _ref = TodoView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TodoView.prototype.tagName = 'li';

    TodoView.prototype.className = 'todo-item';

    TodoView.prototype.initialize = function() {
      this.model.on('change', this.render);
      this.model.on('destroy hide', this.remove);
      return this.model.view = this;
    };

    TodoView.prototype.events = {
      'click label': 'toggleStatus',
      'click .btn-destroy': 'destroyItem',
      'click .btn-edit': 'revealEdit',
      'keypress .edit-title': 'editTitle'
    };

    TodoView.prototype.template = _.template('<label class="checkbox<% if(done === "1") print(" is-done") %>">' + '<input type="checkbox"' + '<% if(done === "1") print("checked") %>' + '><%= title %>' + '</label>' + '<div class="btn-group">' + '<a href="#" class="btn btn-small btn-inverse btn-edit">Edit</a>' + '<a href="#" class="btn btn-small btn-danger btn-destroy">Delete</a>' + '</div>' + '<input type="text" class="edit-title" value="<%= title %>" style="display:none;">');

    TodoView.prototype.render = function() {
      var attributes;
      attributes = this.model.toJSON();
      return this.$el.html(this.template(attributes));
    };

    TodoView.prototype.remove = function() {
      return this.$el.remove();
    };

    TodoView.prototype.toggleStatus = function() {
      return this.model.toggleStatus();
    };

    TodoView.prototype.destroyItem = function() {
      return this.model.destroyItem();
    };

    TodoView.prototype.editTitle = function(e) {
      var newTitle;
      newTitle = this.$el.find('input.edit-title').val();
      if (e.keyCode === 13) {
        return this.model.editTitle(newTitle);
      }
    };

    TodoView.prototype.revealEdit = function() {
      return this.$el.find('input.edit-title').toggle().focus();
    };

    return TodoView;

  })(Backbone.View);
  return TodoView;
});
