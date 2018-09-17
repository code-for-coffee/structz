'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by codeforcoffee on 6/2/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @memberof Structz */
/** Class representing a Tree data structure type that contains a Root node */
var Tree = function () {
  /**
   * Instantiates a Node as a Binary Tree
   * @param root
   */
  function Tree(root) {
    _classCallCheck(this, Tree);

    this._root = root;
  }

  /**
   * Performs a function on a Node with the provided function and returns the output. Optionally accepts a Tree to perform this otherwise a new Tree is instantiated and returned (breaks immutability).
   * @param node
   * @param func
   * @param tree
   * @returns {*}
   */


  _createClass(Tree, [{
    key: 'root',


    /**
     * Returns the root of the Node.
     * @returns {*}
     */
    get: function get() {
      return this._root;
    }
  }], [{
    key: 'map',
    value: function map(node, func) {
      var tree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      node.value = func(node.value);
      if (tree === null) {
        tree = new Tree(node);
      }

      if (node.hasChildren()) {
        _lodash2.default.map(node.children, function (child) {
          Tree.map(child, func, tree);
        });
      }
      return tree;
    }
  }]);

  return Tree;
}();

exports.default = Tree;