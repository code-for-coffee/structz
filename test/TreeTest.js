/**
 * Created by codeforcoffee on 6/2/17.
 */

const chai = require('chai'),
  expect = chai.expect,
  should = require('chai').should();

const Node = require('../dist/index').Node;
const Tree = require('../dist/index').Tree;

describe('A Tree data structure type that contains a Root node data structure', () => {

  it('can instantiate itself', () => {
    let rootNode = new Node('Cell');
    let someTree = new Tree(rootNode);
    should.exist(someTree);
  });

  it('returns the root Node', () => {
    let rootNode = new Node('Cell');
    let someTree = new Tree(rootNode);
    expect(someTree.root).to.equal(rootNode);
  });

  it('maps over a Node', () => {
    let rootNode = new Node(1);
    rootNode.append(new Node(2));
    let newRootNode = Tree.map(rootNode, (node) => {
      return node + 10;
    })
    expect(newRootNode.root.value).to.equal(11);
  });

});