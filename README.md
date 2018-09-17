# structz
ES2015 Class versions of a Node and Tree

[![Build Status](https://travis-ci.org/code-for-coffee/structz.svg?branch=master)](https://travis-ci.org/code-for-coffee/structz) [![codecov](https://codecov.io/gh/code-for-coffee/structz/branch/master/graph/badge.svg)](https://codecov.io/gh/code-for-coffee/structz)

## Install

`npm install structz` or `yarn add structz`

**ES Module**

```
import { Node, Tree } from 'structz';
```

**CJS**

```js
const Structz = require('structz'),
  Node = Structz.Node,
  Tree = Structz.Tree;
```

## Getting Started

After importing the library, you can create as many nodes as you'd like.

```js
let rootSoilNode = new Node('soil');
let fertilizerChildNode = new Node('fertilizer');
let waterChildNode = new Node('h2o');
```

The `new Node()` constructor accepts an argument of any Javascript type.

You can append child nodes to a root node like so:

```js
rootSoilNode.append(fertilizerChildNode);
rootSoilNode.append(waterChildNode);
```

You can detect if a `Node` is a root or not as well.

```js
rootSoilNode.isRoot(); // -> true
waterChildNode.isRoot(); // -> false
```

Accessing child nodes is simple.

```js
rootSoilNode.children // returns [fertilizerChildNode, waterChildNode]
```

You can perform immutable operations on the `Node` data structure using the `Tree` class. You instantiate it with a *root* Node.

```js
let rootNode = new Node(1);
rootNode.append(new Node(2));
let newRootNode = Tree.map(rootNode, (node) => {
  return node + 10;
}); // this returns a `new Tree()` with the newly created `Node` as the `.root` value.
newRootNode.root // returns Node of modified type
// in this case, our new structure looks like:
[11] (root)
|
[12] (child)
```

# Documentation

See `docs/index.html` for up to date documentation.

<a name="Node"></a>

## Node
Class representing a Node data structure type

**Kind**: global class  

* [Node](#Node)
    * [.children](#Node+children) ⇒ <code>Array</code>
    * [.value](#Node+value) ⇒ <code>\*</code>
    * [.value](#Node+value)
    * [.isRoot()](#Node+isRoot) ⇒ <code>boolean</code>
    * [.hasChildren()](#Node+hasChildren) ⇒ <code>boolean</code>
    * [.append(child)](#Node+append) ⇒ [<code>Node</code>](#Node)
    * [.toString()](#Node+toString) ⇒ <code>string</code>

<a name="Node+children"></a>

### node.children ⇒ <code>Array</code>
Returns an array of child nodes.

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+value"></a>

### node.value ⇒ <code>\*</code>
Returns the value of the this.attributes.

**Kind**: instance property of [<code>Node</code>](#Node)  
<a name="Node+value"></a>

### node.value
Sets the value of this.attributes.

**Kind**: instance property of [<code>Node</code>](#Node)  

| Param |
| --- |
| attribute | 

<a name="Node+isRoot"></a>

### node.isRoot() ⇒ <code>boolean</code>
Detects if this Node is a parent node or not.

**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node+hasChildren"></a>

### node.hasChildren() ⇒ <code>boolean</code>
Detects if this node has children or not.

**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node+append"></a>

### node.append(child) ⇒ [<code>Node</code>](#Node)
Appends a child Node to this Node.

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param |
| --- |
| child | 

<a name="Node+toString"></a>

### node.toString() ⇒ <code>string</code>
Returns a String that represents this Node.

**Kind**: instance method of [<code>Node</code>](#Node)

## Classes

<dl>
<dt><a href="#Tree">Tree</a></dt>
<dd><p>Class representing a Tree data structure type that contains a Root node</p>
</dd>
</dl>

<a name="Tree"></a>

## Tree
Class representing a Tree data structure type that contains a Root node

**Kind**: global class  

* [Tree](#Tree)
    * [new Tree(root)](#new_Tree_new)
    * _instance_
        * [.root](#Tree+root) ⇒ <code>\*</code>
    * _static_
        * [.map(node, func, tree)](#Tree.map) ⇒ <code>\*</code>

<a name="new_Tree_new"></a>

### new Tree(root)
Instantiates a Node as a Binary Tree


| Param |
| --- |
| root | 

<a name="Tree+root"></a>

### tree.root ⇒ <code>\*</code>
Returns the root of the Node.

**Kind**: instance property of [<code>Tree</code>](#Tree)  
<a name="Tree.map"></a>

### Tree.map(node, func, tree) ⇒ <code>\*</code>
Performs a function on a Node with the provided function and returns the output. Optionally accepts a Tree to perform this otherwise a new Tree is instantiated and returned (breaks immutability).

**Kind**: static method of [<code>Tree</code>](#Tree)  

| Param | Default |
| --- | --- |
| node |  | 
| func |  | 
| tree | <code></code> | 

## Current Test Coverage

```bash
> structz@1.0.0 test ~/github/structz
> nyc mocha

  A Node data structure
    ✓ Can instantiate a new Node
    ✓ Returns [] children if empty
    ✓ Returns [] children if not empty
    ✓ successfully can append a child
    ✓ returns false if there are no children
    ✓ returns true if there are children
    ✓ can return its own value
    ✓ can set its own value
    ✓ can output itself as a String

  A Tree data structure type that contains a Root node data structure
    ✓ can instantiate itself
    ✓ returns the root Node
    ✓ maps over a Node


  12 passing (12ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |    88.46 |    71.43 |    91.67 |       92 |                   |
 Node.js  |       80 |        0 |     87.5 |    85.71 |             23,24 |
 Tree.js  |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
```
## Changelog

- *1.0.0* - Preparing initial release, Updating to support CJS + ES Modules
- *0.2.4* - Updated JSDoc Generation
- *0.2.3* - Updated README with starter guide
- *0.2.2* - Docs updated
- *0.2.1* - Corrected bug with exports
- *0.2.0* - Changed package structure for modularity
- *0.1.1* - Added Test Coverage
- *0.1.0* - Initial release.
