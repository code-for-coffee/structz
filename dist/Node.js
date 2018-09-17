"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by codeforcoffee on 6/2/17.
 */

/** Class representing a Node data structure type */
/** @memberof Structz */
var Node = function () {
  /***
   * Instantiates a new node with a valid Javascript type
   * @param attribute
   */
  function Node(attribute) {
    _classCallCheck(this, Node);

    this._val = attribute;
    this._parent = null;
    this._children = [];
  }

  /**
   * Detects if this Node is a parent node or not.
   * @returns {boolean}
   */


  _createClass(Node, [{
    key: "isRoot",
    value: function isRoot() {
      if (this._parent === true) return true;
      return false;
    }

    /**
     * Returns an array of child nodes.
     * @returns {Array}
     */

  }, {
    key: "hasChildren",


    /**
     * Detects if this node has children or not.
     * @returns {boolean}
     */
    value: function hasChildren() {
      return this._children.length > 0;
    }

    /**
     * Returns the value of the this.attributes.
     * @returns {*}
     */

  }, {
    key: "append",


    /**
     * Appends a child Node to this Node.
     * @param child
     * @returns {Node}
     */
    value: function append(child) {
      child._parent = this;
      this._children.push(child);
      return this;
    }

    /**
     * Returns a String that represents this Node.
     * @returns {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "Node (val: " + this._val + "), children: " + this._children.length;
    }
  }, {
    key: "children",
    get: function get() {
      return this._children;
    }
  }, {
    key: "value",
    get: function get() {
      return this._val;
    }

    /**
     * Sets the value of this.attributes.
     * @param attribute
     */
    ,
    set: function set(attribute) {
      this._val = attribute;
    }
  }]);

  return Node;
}();

exports.default = Node;