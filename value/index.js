function value(func, context){
  if (typeof(func) === "function"){
    return value(func.call(context || arguments[1]));
  } else {
    return func;
  }
}

module.exports = value;
