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
    if(Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      iteratee(list[i], i, list);
    }
  }
  else {
    for(var key in list) {
      iteratee(list[key], key, list);
    }
  }
  return list;
}

_.indexOf = function(array, value) {
  for (var i = 0; i < array.length; i++) {  
    if (array[i] === value) {
      return i;
    } 
  }
    if (arguments.length === 1) {
    return -1;
  }
    return -1;
}

_.filter = function(list, func) {
  // loop through each value in list
    // apply function to determine true || false
      // if true push to new array
  var filtered = [];    

  if(Array.isArray(list)) {
  for(var i = 0; i < list.length; i++) {
    if (func(list[i])) {
      filtered.push(list[i]);
     }
   }
  } else {
    for(var key in list) {
      if (func(list[key])) {
        filtered.push(list[key]);
    }
  }
}
  return filtered;
}

_.reject = function(list, func) {
  
  var rejected = [];

  if(Array.isArray(list)) {
  for(var i = 0; i < list.length; i++) {
    if (!func(list[i])) {
      rejected.push(list[i]);
     }
   }
  } else {
    for(var key in list) {
      if (!func(list[key])) {
        rejected.push(list[key]);
    }
  }
}
  return rejected;
}


if (typeof module !== 'undefined') {
  module.exports = _;
}

