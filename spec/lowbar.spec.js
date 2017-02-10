var path = require('path');
var expect = require('chai').expect;
var sinon = require('sinon')

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  describe('#identity', function () {
    it('is a function', function () {
      expect(_.identity).to.be.a('function');
    });
    it('returns the same value passed', function () {
      expect(_.identity([1, 2, 4])).to.eql([1, 2, 4]);
    });
  });
  describe('#first', function () {
    it('is a function', function () {
      expect(_.first).to.be.a('function');
    });
    it('returns the first value of an array', function () {
      expect(_.first([1, 2, 3])).to.equal(1);
    });
    it('returns the first n elements of an array', function () {
      expect(_.first([1, 2, 3], 2)).to.eql([1, 2]);
    });
  });
  describe('#last', function ()  {
    it('is a function', function ()  {
      expect(_.last).to.be.a('function');
    });
    it('returns the last element of an array', function ()  {
      expect(_.last([1,2,3])).to.equal(3);
    });
    it('returns the last n elements of an array', function ()  {
      expect(_.last([1,2,3],2)).to.eql([2,3]);
    })
  });
  describe('#each', function ()  {
    it('is a function', function ()  {
      expect(_.each).to.be.a('function');
    });
    it('passes each element of a list into a function', function ()  {
      var spy = sinon.spy();
      var output = _.each([1,2,3,4,5], spy);
      expect(spy.callCount).to.eql(5)
    });
    it('passes each element of an object into a function', function ()  {
      var spy = sinon.spy();
      var output = _.each({a:1, b:2, c:3}, spy);
      expect(spy.callCount).to.eql(3)
    });
    it('returns the list passed', function ()  {
      var a = [1,2,3,4];
      var b = _.each(a, function(){});
      expect(b).to.equal(a);
    });
/*    it('function calls with all arguments provided', function ()  {
      var spy = sinon.spy();
      var output = _.each([1,2,3], spy);
      expect(spy.calledWith(list[i], i)).to.equal(true)
    }) */
  })
  describe('#indexOf', function () {
    it('is a function', function () {
      expect(_.indexOf).to.be.a('function');
    });
    it('returns -1 when a value is not passed', function () {
      expect(_.indexOf([1, 2, 3])).to.equal(-1);
    });
    it('returns -1 when a value is not present in the array', function () {
      expect(_.indexOf([1, 2, 3], 4)).to.equal(-1);
    });
    it('returns the index at which a value can be found in an array', function () {
      expect(_.indexOf([1, 2, 3], 2)).to.equal(1);
      expect(_.indexOf([32, 1, 45, 7], 7)).to.equal(3);      
    });
  });
});
