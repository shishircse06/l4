var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["backbone", "jquery", "views/TodoView"], function(Backbone, $, TodoView) {
  var _ref;
  return window.TodoListView = (function(_super) {
    __extends(TodoListView, _super);

    function TodoListView() {
      _ref = TodoListView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TodoListView.prototype.className = 'todo-list';

    TodoListView.prototype.initialize = function() {
      this.collection.on('add', this.addOne, this);
      return this.collection.on('reset', this.render, this);
    };

    TodoListView.prototype.addOne = function(todoItem) {
      var todoView;
      this.collection.add(todoItem);
      todoView = new TodoView({
        model: todoItem
      });
      todoView.render();
      return this.$el.append(todoView.el);
    };

    TodoListView.prototype.alertMe = function() {
      return alert("wooo");
    };

    TodoListView.prototype.render = function() {
      return this.collection.forEach(this.addOne, this);
    };

    return TodoListView;

  })(Backbone.View);
});
