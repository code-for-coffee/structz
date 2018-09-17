/**
 * Created by codeforcoffee on 6/2/17.
 */

/** Class representing a Node data structure type */
/** @memberof Structz */
class Node {
  /***
   * Instantiates a new node with a valid Javascript type
   * @param attribute
   */
  constructor(attribute) {
    this._val = attribute;
    this._parent = null;
    this._children = [];
  }

  /**
   * Detects if this Node is a parent node or not.
   * @returns {boolean}
   */
  isRoot() {
    if (this._parent === true) return true;
    return false;
  }

  /**
   * Returns an array of child nodes.
   * @returns {Array}
   */
  get children() {
    return this._children;
  }

  /**
   * Detects if this node has children or not.
   * @returns {boolean}
   */
  hasChildren() {
    return this._children.length > 0;
  }

  /**
   * Returns the value of the this.attributes.
   * @returns {*}
   */
  get value() {
    return this._val;
  }

  /**
   * Sets the value of this.attributes.
   * @param attribute
   */
  set value(attribute) {
    this._val = attribute;
  }

  /**
   * Appends a child Node to this Node.
   * @param child
   * @returns {Node}
   */
  append(child) {
    child._parent = this;
    this._children.push(child);
    return this;
  }

  /**
   * Returns a String that represents this Node.
   * @returns {string}
   */
  toString() {
    return `Node (val: ${this._val}), children: ${this._children.length}`;
  }
}

export default Node;