var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["backbone", "jquery", "../models/TodoItem"], function(Backbone, $, TodoItem) {
  var _ref;
  return window.TodoList = (function(_super) {
    __extends(TodoList, _super);

    function TodoList() {
      _ref = TodoList.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TodoList.prototype.model = TodoItem;

    TodoList.prototype.url = 'todos/';

    TodoList.prototype.initialize = function() {
      return this.on("remove", this.hideModel);
    };

    TodoList.prototype.hideModel = function(model) {
      return model.trigger("hide");
    };

    return TodoList;

  })(Backbone.Collection);
});
