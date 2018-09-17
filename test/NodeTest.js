/**
 * Created by codeforcoffee on 6/2/17.
 */

const chai = require('chai'),
  expect = chai.expect,
  should = require('chai').should();

const Node = require('../dist/index').Node;

describe('A Node data structure', () => {

  it('Can instantiate a new Node', () => {
    let rootNode = new Node('Cell');
    should.exist(rootNode);
    should.exist(Node);
  })

  it('Returns [] children if empty', () => {
    let rootNode = new Node('Cell');
    let expectation = 0;
    expect(rootNode.children.length).to.equal(expectation);
  })

  it('Returns [] children if not empty', () => {
    let rootNode = new Node('Cell');
    let childNode = new Node('Plankton');
    rootNode.append(childNode);
    expect(rootNode.children[0]).to.equal(childNode);
  })

  it('successfully can append a child', () => {
    let rootNode = new Node('Cell');
    let childNode = new Node('Plankton');
    rootNode.append(childNode);
    expect(rootNode.children.length).to.be.greaterThan(0);
  })

  it('returns false if there are no children', () => {
    let rootNode = new Node('Cell');
    let expectation = false;
    expect(rootNode.hasChildren()).to.equal(expectation);
  })

  it('returns true if there are children', () => {
    let rootNode = new Node('Cell');
    let childNode = new Node('Plankton');
    rootNode.append(childNode);
    let expectation = true;
    expect(rootNode.hasChildren()).to.equal(expectation);
  })

  it('can return its own value', () => {
    let rootNode = new Node('Cell');
    expect(rootNode.value).to.equal('Cell');
  });

  it('can set its own value', () => {
    let rootNode = new Node('Cell');
    rootNode.value = 'animal';
    expect(rootNode.value).to.equal('animal');
  });

  it('can output itself as a String', () => {
    let rootNode = new Node('Cell');
    expect(typeof rootNode.toString()).to.equal('string')
  })

});