'use strict';

module.exports = function(name){
  if(typeof name === 'string') {
    return 'Hello, ' + name;
  } else {
    return null;
  }
};
