let _ = {};

///////////////////////////////
_.identity = function(value) {
  return value;
};

//////////////////////////
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

//////////////////////////
_.last = function(array, n) {
  if(arguments.length === 1) {
    let reverse = array.reverse();
    return reverse[0];
};
  let result = [];
  for(let i = n-1; i < array.length; i++) {
    result.push(array[i])
  }
  return result;
};

//////////////////////////
_.each = function(list, iteratee) {
    if(Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      iteratee(list[i], i, list);
    }
  } 
  else {
    for(let key in list) {
      iteratee(list[key], key, list);
    }
  }
  return list;
}

//////////////////////////
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

//////////////////////////
_.filter = function(list, func) {
  let filtered = [];    
  if(Array.isArray(list)) {
  for(let i = 0; i < list.length; i++) {
    if (func(list[i])) {
      filtered.push(list[i]);
     }
   }
  } else {
    for(let key in list) {
      if (func(list[key])) {
        filtered.push(list[key]);
    }
  }
}
  return filtered;
}

//////////////////////////
_.reject = function(list, func) {
  
  let rejected = [];

  if (Array.isArray(list)) {
  for (let i = 0; i < list.length; i++) {
    if (!func(list[i])) {
      rejected.push(list[i]);
     }
   }
  } else {
    for (let key in list) {
      if (!func(list[key])) {
        rejected.push(list[key]);
    }
  }
}
  return rejected;
}

//////////////////////////
_.uniq = function(array) {
  let uniqueArray = [];

  if (arguments.length < 1) return array;

  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {     
      uniqueArray.push(array[i]);
    };
  }
  return uniqueArray;
};

//////////////////////////
_.map = function(list, iteratee) {
  let newMap = [];

  if (arguments.length < 1) return list;

  if (Array.isArray(list)) {
    for(let i = 0; i < list[i]; i++) {
      let newValue = iteratee(list[i], i, list);
      newMap.push (newValue);
    }
  }
  else {
    for (let key in list) {
      let newValue = iteratee(list[key], key, list);
      newMap.push(newValue);
    }
  }
  return newMap;
};

//////////////////////////
_.pluck = function(list, propertyName) {
  let newMap = [];

  if (arguments.length < 1) return list;

  for (let i = 0; i < list.length; i++) {
        newMap.push(list[i][propertyName])
    }
  return newMap;
};

//////////////////////////
_.reduce = function(list, iteratee) {
  
  let result;

  if (!arguments) return list;

  _.each (list, function (value) {
    if (result === undefined) {
      result = value;
    } else {
      result = iteratee(result, value);
    }
  });
  return result;
};

//////////////////////////
_.contains = function(list, value, fromIndex) {

  let bool;

  if (arguments.length < 1) return list;

  for (let i = fromIndex || 0; i < list.length; i++) {
    if (list[i] === value) bool = true;
     else bool = false;
  };

  return bool;
};

//////////////////////////
_.every = function(list, predicate) {

  if (arguments.length < 1) return list;

  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) {
      return false;
    }
  }
  return true;
};

//////////////////////////
_.some = function(list, predicate) {
  
  if (arguments.length < 1) return list;

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return true;
    }
  }
  return false;
};

//////////////////////////
_.extend = function(destination, sources) {

  if(!sources) return destination;
    return Object.assign({}, destination, sources)
};

//////////////////////////
_.defaults = function(object, defaults) {

  if (!defaults) return object;
  
  _.each(defaults, function (value, key) {
    if(object[key] === undefined)
      object[key] = value
  })
  return object;
}

//////////////////////////
_.indexOf = function(array, value) {
    
    let min = 0; 
    let max = array.length - 1; 
    let mid;

    if (!Array.isArray(array) || !value) return -1;

    while (min <= max) {
        mid = Math.floor((max + min) / 2);

        if (array[mid] === value) return mid;
        else if (array[mid] < value) min = mid + 1;
        else max = mid - 1;
    }
    return -1;
};

//////////////////////////
_.once = function(func) {

    let returnVal, called = false;

    return () => {
        if (!called) {
            called = true;
            returnVal = func.apply(this, arguments);
        }
        return returnVal;
    };
};

//////////////////////////
_.memoize = function(func) {
    
    const cache = {};

    const fn = (key) => {
        let index = JSON.stringify(key);

        if (index in cache) {
            return cache[index];
        } else {
            let memo = func.apply(null, arguments);
            cache[index] = memo;
            return memo;
        }
    };
        fn.cache = cache;
        return fn;
};

//////////////////////////
_.delay = function(func, wait) {

    let arg = Array.prototype.slice.call(arguments, 2);
    
    return setTimeout(function () {
        return func.apply(null, arg);
    }, wait);
};

//////////////////////////
_.shuffle = function(list) {

    let count = list.length;

    while (count > 0) {
        let i = Math.floor(Math.random() * count);
        count --;
        let temp = list[count];
        list[count] = list[i];
        list[i] = temp;
    }
    return list;
};

//////////////////////////
_.invoke = function(list, method) {
    
    let listCopy = list.slice();
    
    return listCopy.map(element => {
        if (typeof(method) === 'string') {
            method = element[method];
        }
        if (method === undefined) return undefined;
        return method.apply(element);
    });
};

//////////////////////////
_.sortBy = function(list, iteratee) {
    return list.sort((a, b) => {
        return iteratee(a) - iteratee(b);
    });
};

//////////////////////////
_.zip = function(arrays) {
    let result = [];
    let list = Array.prototype.slice.call(arguments);
   
    for (let i = 0; i < list.length; i++) {
        let newArray = [];

        for (let j = 0; j < list.length; j++) {
            newArray.push(list[j][i]);
        }
        result.push(newArray);
    }
    return result;
};

//////////////////////////
_.flatten = function(array) {
    
    if (!Array.isArray(array)) return [];

    return array.reduce((result, element) => {
        return result.concat(element);
    },[]);
};


if (typeof module !== 'undefined') {
  module.exports = _;
}

