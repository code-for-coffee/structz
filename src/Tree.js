/**
 * Created by codeforcoffee on 6/2/17.
 */
import _ from 'lodash';

/** @memberof Structz */
/** Class representing a Tree data structure type that contains a Root node */
class Tree {
  /**
   * Instantiates a Node as a Binary Tree
   * @param root
   */
  constructor(root) {
    this._root = root;
  }

  /**
   * Performs a function on a Node with the provided function and returns the output. Optionally accepts a Tree to perform this otherwise a new Tree is instantiated and returned (breaks immutability).
   * @param node
   * @param func
   * @param tree
   * @returns {*}
   */
  static map(node, func, tree = null) {
    node.value = func(node.value);
    if (tree === null) {
      tree = new Tree(node);
    }

    if (node.hasChildren()) {
      _.map(node.children, function(child) {
        Tree.map(child, func, tree);
      });
    }
    return tree;
  }

  /**
   * Returns the root of the Node.
   * @returns {*}
   */
  get root() {
    return this._root;
  }
}

export default Tree;