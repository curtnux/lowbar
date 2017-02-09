var _ = {};

_.identity = function(value) {
  return value;
};

_.first = function(array, n) {
  var result = [];
  var i = 0;
  if (arguments.length === 1) {
    return array[0];
  } while (i < n) {
    result.push(array[i]); i++;
  };
  return result;
}

if (typeof module !== 'undefined') {
  module.exports = _;
}
