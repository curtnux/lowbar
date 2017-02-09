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
};

_.last = function(array, n)  {
  if(arguments.length === 1) {
    var reverse = array.reverse();
    return reverse[0];
};
  // loop through array from n
  // push values into new array
  var result = [];
  for(var i = n-1; i < array.length; i++) {
    result.push(array[i])
  }
  return result;
};

_.each = function(list, iteratee)  {
  // IF array
  // loop through array
  // for each iteratee - console.log
  // else 
  //  array.forEach(function(element)  {
    //  iteratee(element)});
    if(Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      iteratee(list[i]);
    }
  }
  else {
    for(var key in list) {
      iteratee(list[key])
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = _;
}
