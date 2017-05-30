let path = require('path');
let expect = require('chai').expect;
let sinon = require('sinon')

let _ = require(path.join(__dirname, '..', './lowbar.js'));

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
      expect(_.first([1])).to.equal(1);
    });
    it('returns the first n elements of an array', function () {
      expect(_.first([1, 2, 3], 2)).to.eql([1, 2]);
      expect(_.first([1,2,3,4,5,6,7,8,9],5)).to.eql([1,2,3,4,5])
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
      let spy = sinon.spy();
      let output = _.each([1,2,3,4,5], spy);
      expect(spy.callCount).to.eql(5)
    });
    it('passes each element of an object into a function', function ()  {
      let spy = sinon.spy();
      let output = _.each({a:1, b:2, c:3}, spy);
      expect(spy.callCount).to.eql(3)
    });
    it('returns the list passed', function ()  {
      let a = [1,2,3,4];
      let b = _.each(a, function(){});
      expect(b).to.equal(a);
    });
    it('function calls with all arguments provided', function ()  {
      let spy = sinon.spy();
      _.each([1,2,3], spy);
      expect(spy.calledWith()).to.equal(true)
    }); 
  });

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
      expect(_.indexOf([2, 4, 5, 7, 3], 7)).to.equal(3);      
    });
  });

  describe('#filter', function () {
    it('is a function', function () {
      expect(_.filter).to.be.a('function');
    });
    it('returns a filtered array of values that pass a predicate', function () {
      expect(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num < 3; })).to.eql([1, 2]);
      expect(_.filter({a:1, b:2, c:3, d:4, e:5}, function(num){ return num <= 3; })).to.eql([1, 2, 3]);
    });
  });
  
  describe("#reject", function () {
    it('is a function', function () {
      expect(_.reject).to.be.a('function');
    });
    it('returns an array', function () {
      expect(_.reject()).to.be.a('array')
    });
    it('returns an array of elements that do not pass the predicate', function () {
      let spy = sinon.spy();
      _.reject([1,2,3], spy);
      expect(spy.calledWith()).to.equal(true);
      expect(spy.firstCall.args[0]).to.equal(1);
    });
    it('returns an array of rejected values when passed a function', function () {
      expect(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })).to.eql([1, 3, 5]);
    });
  });

  describe('#uniq', () => {
    it('is a function', () => {
      expect(_.uniq).to.be.a('function');
    });
    it('returns undefined when no array list is passed in', () => {
      expect(_.uniq()).to.equal(undefined);
    });
    it('returns an array', () => {
      expect(_.uniq([1,2])).to.be.an('array');
    });
    it('returns only the unique numbers from the array passed in', () => {
      let input = [1,1,2,4];
      expect(_.uniq(input)).to.eql([1,2,4])
    });
    it('returns unique numbers from sorted arrays', () => {
      expect(_.uniq([2,2,3,4,4,5])).to.eql([2,3,4,5]);
    });
    it('returns unique numbers from unsorted arrays', () => {
      let input = [1,2,1,4,1,3];
      expect(_.uniq(input)).to.eql([1,2,4,3]);
    });
  });

  describe('#map', () => {
    it('is a function', () => {
      expect(_.map).to.be.a('function');
    });
    it('returns undefined when no list is passed into the function', () => {
      expect(_.map()).to.equal(undefined);
    });
    it('maps an array', () => {
      let input = _.map([1,2,3], function(n) {return n * 2});
      let output = [2,4,6];
      expect(input).to.eql(output);
    });
    it('maps a list of objects', () => {
      let input = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
      let output = [3,6,9];
      expect(input).to.eql(output);
    });
  });

  describe('#pluck', () => {
    it('is a function', () => {
      expect(_.pluck).to.be.a('function');
    });
    it('returns undefined when no list is passed into the function', () => {
      expect(_.pluck()).to.equal(undefined);
    });
    it('returns an array', () => {
      let input = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      expect(input).to.be.an('array');
    });
    it('extracts a list of property values', () => {
      let input = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      expect(_.pluck(input,'name')).to.eql(['moe', 'larry', 'curly']);
    });
  });

  describe('#reduce', () => {
    it('is a function', () => {
      expect(_.reduce).to.be.a('function');
    });
    it('returns undefined if no arguemnts are passed into the function', () => {
      expect(_.reduce()).to.equal(undefined);
    });
    it('reduces an array of numbers into a single value', () => {
      let input = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
      expect(input).to.equal(6);
    });
  });

  describe('#contains', () => {
    it('is a function', () => {
      expect(_.contains).to.be.a('function');
    });
    it('returns undefined if no arguemnts are passed into the function', () => {
      expect(_.contains()).to.equal(undefined);
    });
    it('returns a boolean value', () => {
      expect(_.contains([1,2],2)).to.be.a('boolean');
    });
    it('returns true when a value is included within the list', () => {
      let input = _.contains([1,2,3], 3);
      expect(input).to.equal(true);
    });
    it('returns false if a value is not contained within the list', () => {
      let input = _.contains([1,2,3],5);
      expect(input).to.equal(false);
    });
  });

  describe('#every', () => {
    it('is a function', () => {
      expect(_.every).to.be.a('function');
    });
    it('returns undefined if no arguments are passed into the function', () => {
      expect(_.every()).to.equal(undefined);
    });
    it('returns a boolean value', () => {
      let input = _.every([2, 4, 5], function(num) { return num % 2 == 0; });    
      expect(input).to.be.a('boolean');
    });
    it('returns false when all values do not pass predicate', () => {
      let input = _.every([2, 4, 5], function(num) { return num % 2 == 0; });
      expect(input).to.equal(false);
    });
    it('returns true if all values pass predicate', () => {
      let input = _.every([2,4,6], function(num) { return num % 2 == 0});
      expect(input).to.equal(true);
    });
  });

  describe('#some', () => {
    it('is a function', () => {
      expect(_.some).to.be.a('function');
    });
    it('returns undefined if no arguments are passed into function', () => {
      expect(_.some()).to.equal(undefined);
    });
    it('returns a boolean value', () => {
      let input = _.some([null, 0, 'yes', false], function(val) { return val % 2 == 0});
      expect(input).to.equal(true)
    });
    it('returns true when any value passes the predicate', () => {
      let input = _.some([null, 0, 'yes', false], function(val) { return val % 2 == 0});
      expect(input).to.equal(true);
    });
    it('returns false if no values pass the predicate', () => {
      let input = _.some([null, 0, 'yes', false], function(val) { return val % 2 == 1});
      expect(input).to.equal(false);
    });
  });

  describe('#extend', () => {
    it('is a function', () => {
      expect(_.extend).to.be.a('function');
    });
    it('returns an object', () => {
      let input = _.extend({name: 'moe'}, {age: 50});
      expect(input).to.be.an('object');
    });
    it('returns a single object when passed in 2 objects', () => {
      let input = _.extend({name: 'moe'}, {age: 50});
      let output = {name: 'moe', age: 50};
      expect(input).to.eql(output);
    });
  });

  describe('#defaults', () => {
    it('is a function', () => {
      expect(_.defaults).to.be.a('function');
    });
    it('returns an object', () => {
      let iceCream = {flavor: "chocolate"};
      let input = _.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
      expect(input).to.be.an('object');
    });
    it('returns an object with added prop/val', () => {
      let iceCream = {flavor: "chocolate"};
      let input = _.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
      expect(input).to.eql({flavor: "chocolate", sprinkles: "lots"});
    });
  });

describe('#indexOf', () => {
        it('is a function', () => {
            expect(_.indexOf).to.be.a('function');
        });
        it('returns an integer', () => {
            expect(_.indexOf([1,2,3],1)).to.be.a('number');
        });
        it('returns -1 if no value is found within the searched array', () => {
            expect(_.indexOf([1,2,3],4)).to.equal(-1);
        });
        it('returns -1 if no array is passed into the function', () => {
            expect(_.indexOf(1)).to.equal(-1);
        });
        it('returns -1 if no value is passed into the function', () => {
            expect(_.indexOf([1,2,3])).to.equal(-1);
        });
        it('returns the index number using binary search', () => {
            expect(_.indexOf([1,2,3,4],2)).to.equal(1);
        //FIXME:expect(_.indexOf([1,4,6,8,3,9],8)).to.equal(3);
        });
    });

    describe('#once', () => {
        it('is a function', () => {
            expect(_.once).to.be.a('function');
        });
        it('returns the called function', () => {
            let spy = sinon.spy();
            let fn = _.once(spy);
            fn();
            expect(spy.called).to.equal(true);
        });
        it('calls the function only once', () => {
            let spy = sinon.spy();
            let fn = _.once(spy);
            fn();
            fn();
            fn();
            expect(spy.callCount).to.equal(1);
        });
    });

    describe('#memoize', () => {
        it('is a function', () => {
            expect(_.memoize).to.be.a('function');
        });
        it('returns a memoized function', () => {
            let spy = sinon.spy();
            let memo = _.memoize(spy);
            memo();
            expect(spy.called).to.equal(true);
        });
        it('holds a cached value', () => {
            let fun = () => { return 3 * 2;};
            let memo = _.memoize(fun);
            memo(1);
            let actual = memo.cache;

            expect(actual).to.eql({1:6});
        });
    });

    describe('#delay', () => {
        it('is a function', () => {
            expect(_.delay).to.be.a('function');
        });
        it('returns a called function after a specified amount of time', (done) => {
            let spy = sinon.spy();
            _.delay(spy, 80);
            expect(spy.calledOnce).to.equal(false);

            setTimeout(() => {
                expect(spy.calledOnce).to.equal(true);
                done();
            }, 100);
        });
    });

    describe('#shuffle', () => {
        it('is a function', () => {
            expect(_.shuffle).to.be.a('function');
        });
        it('returns an array', () => {
            let input = _.shuffle([1,2,3,4,5]);
            expect(input).to.be.an('array');
        });
        it('returns a shuffled array', () => {
            let input = _.shuffle([1,2,3,4,5]);
            expect(input).to.not.equal([1,2,3,4,5]);
        });
        it('returns a shuffled array of objects', () => {
            let input = _.shuffle([{1:1}, {2:2}, {3:3}]);
            let output = [{1:1}, {2:2}, {3:3}];
            expect(input).to.not.equal(output);
        });
    });

    describe('#invoke', () => {
        it('is a function', () => {
            expect(_.invoke).to.be.a('function');
        });
        it('returns an array', () => {
            let list = [[5,1,7],[3,2,1]];
            let input = _.invoke(list, 'sort');
            expect(input).to.be.an('array');
        });
        it('calls a method on a list', () => {
            let list = [[5,1,7],[3,2,1]];
            let input = _.invoke(list, 'sort');
            let output = [[1,5,7],[1,2,3]];
            expect(input).to.eql(output);
        });
        it('returns undefined if there isnt a usable method', () => {
            let list = [[5,1,7],[3,2,1]];
            let input = _.invoke(list, 'noMethod');
            expect(input).to.eql([undefined, undefined]);
            expect(input).to.be.an('array');
        });
    });

    describe('#sortBy', () => {
        it('is a function', () => {
            expect(_.sortBy).to.be.a('function');
        });
        it('returns a sort list by its iteratee function', () => {
            let input = _.sortBy([1, 2, 3, 4, 5, 6], function (num) { return Math.sin(num); });
            let output = [5, 4, 6, 3, 1, 2];
            expect(input).to.eql(output);
        });
    });

    describe('#zip', () => {
        it('is a function', () => {
            expect(_.zip).to.be.a('function');
        });
        it('returns an array', () => {
            let input = _.zip([1]);
            expect(input).to.be.an('array');
        });
        it('returns a zipped array', () => {
            let input = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
            let output = [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]];
            expect(input).to.eql(output);
        });
    });

    describe('#flatten', () => {
        it('is a function', () => {
            expect(_.flatten).to.be.a('function');
        });
        it('returns an array', () => {
            expect(_.flatten()).to.be.an('array');
        });
        it('returns a flattened array', () => {
            let input = _.flatten([1,2,3,[4,5]]);
            let expected = [1,2,3,4,5];
            expect(input).to.eql(expected);
            expect(expected).to.be.an('array');
        });
        it('handles arguments which arent an array', () => {
            let input = _.flatten({1:1}, {1:2});
            let expected = [];
            expect(input).to.eql(expected);
        });
    });

});
