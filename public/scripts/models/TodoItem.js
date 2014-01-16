var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['backbone', 'jquery'], function(Backbone, $) {
  var _ref;
  return window.TodoItem = (function(_super) {
    __extends(TodoItem, _super);

    function TodoItem() {
      _ref = TodoItem.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TodoItem.prototype.urlRoot = 'todos';

    TodoItem.prototype.defaults = {
      title: 'Empty to-do',
      done: '0'
    };

    TodoItem.prototype.toggleStatus = function() {
      if (this.get('done') === '0') {
        this.set({
          'done': '1'
        });
      } else {
        this.set({
          'done': '0'
        });
      }
      return this.save();
    };

    TodoItem.prototype.destroyItem = function() {
      return this.destroy({
        wait: true,
        success: function() {
          return console.log("Successfully destroyed todo item");
        },
        error: function() {
          return console.log("Error destroying todo");
        }
      });
    };

    TodoItem.prototype.editTitle = function(newTitle) {
      this.set({
        'title': newTitle
      });
      return this.save();
    };

    TodoItem.prototype.createItem = function(newItem) {
      this.urlRoot = 'todos';
      this.set({
        'title': newItem
      });
      return this.save();
    };

    return TodoItem;

  })(Backbone.Model);
});
