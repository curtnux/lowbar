var _ = {};

_.identity = function(value) {
  return value;
};

_.first = function(array, n) {
  let result = [];
  let i = 0;
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
  for (let i = 0; i < array.length; i++) {  
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

  if (Array.isArray(list)) {
  for (var i = 0; i < list.length; i++) {
    if (!func(list[i])) {
      rejected.push(list[i]);
     }
   }
  } else {
    for (var key in list) {
      if (!func(list[key])) {
        rejected.push(list[key]);
    }
  }
}
  return rejected;
}

_.uniq = function (array) {
  let uniqueArray = [];

  if (arguments.length < 1) return array;

  for (var i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {     
      uniqueArray.push(array[i]);
    };
  }
  return uniqueArray;
};

_.map = function (list, iteratee) {
  let getMap = [];

  if (arguments.length < 1) return list;

  if (Array.isArray(list)) {
    for(var i = 0; i < list[i]; i++) {
      let newValue = iteratee(list[i], i, list);
      getMap.push (newValue);
    }
  }
  else {
    for (var key in list) {
      let newValue = iteratee(list[key], key, list);
      getMap.push(newValue);
    }
  }
  return getMap;
};

_.pluck = function (list, propertyName) {
  let newMap = [];

  if (arguments.length < 1) return list;

  for (var i = 0; i < list.length; i++) {
        newMap.push(list[i][propertyName])
    }
  return newMap;
};

_.reduce = function (list, iteratee) {
  
  let result;

  if (!arguments) return list;
TODO: // include index, list, etc into function callback see reduce notes & add further tests to include objects/arrays
  _.each (list, function (value) {
    if (result === undefined) {
      result = value;
    } else {
      result = iteratee(result, value);
    }
  });
  return result;
};

_.contains = function (list, value, fromIndex) {

  let bool;

  if (arguments.length < 1) return list;

  for (let i = fromIndex || 0; i < list.length; i++) {
    if (list[i] === value) bool = true;
     else bool = false;
  };

  return bool;
};

_.every = function (list, predicate) {

  if (arguments.length < 1) return list;

  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) {
      return false;
    }
  }
  return true;
};

_.some = function (list, predicate) {
  
  if (arguments.length < 1) return list;
  TODO: //include object.values to turn objects to lists 
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return true;
    }
  }
  return false;
};

_.extend = function (destination, sources) {

  if(!sources) return destination;
  TODO: // consider alternative to object assign
  return Object.assign({}, destination, sources)
};

_.defaults = function (object, defaults) {

  if (!defaults) return object;
  
  _.each(defaults, function (value, key) {
    if(object[key] === undefined)
      object[key] = value
  })
  return object;
}









if (typeof module !== 'undefined') {
  module.exports = _;
}

