function once(func, context){
  var result;

  return function(){
    if (func){
      result = func.apply(context || this, arguments);
      func = null;
    }

    return result;
  }
}

module.exports = once;
