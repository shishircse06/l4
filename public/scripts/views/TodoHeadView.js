var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["backbone", "jquery"], function(Backbone, $) {
  var _ref;
  window.TodoHeadView = (function(_super) {
    __extends(TodoHeadView, _super);

    function TodoHeadView() {
      this.createItem = __bind(this.createItem, this);
      this.render = __bind(this.render, this);
      _ref = TodoHeadView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TodoHeadView.prototype.className = 'todo-header';

    TodoHeadView.prototype.initialize = function() {
      this.model.on('change', this.render);
      return this.model.view = this;
    };

    TodoHeadView.prototype.events = {
      'keypress input#new-todo': 'createItem'
    };

    TodoHeadView.prototype.template = _.template('<h1 class="text-center">to-do\'s</h1>' + '<p id="total-todos" class="text-center"></p>' + '<input id="new-todo" class="input-block-level" type="text" placeholder="What\'s to do?">');

    TodoHeadView.prototype.render = function() {
      return this.$el.html(this.template());
    };

    TodoHeadView.prototype.createItem = function(e) {
      var newItem;
      newItem = this.$el.find('input#new-todo').val();
      if (e.keyCode === 13) {
        return this.model.createItem(newItem);
      }
    };

    return TodoHeadView;

  })(Backbone.View);
  return TodoHeadView;
});
