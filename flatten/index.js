function flatten(arr) {
  if (arr.length == 0) {return []};
  if (Array.isArray(arr[0])) {
    return flatten(arr[0].concat(flatten(arr.slice(1,arr.length))));
  }
  return [].concat([arr[0]], flatten(arr.slice(1,arr.length)));
}

module.exports = flatten;
