function map(arr, func, context){

  result = new Array(arr.length);
  args = arguments[1];

  for (i=0; i<arr.length; i++){
    result[i] = func.call(context || args, arr[i], i, arr);
  }
  return result;
}

module.exports = map;
