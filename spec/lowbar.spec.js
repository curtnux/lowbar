var path = require('path');
var expect = require('chai').expect;

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
});
