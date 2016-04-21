function binarySearch(array, key) {

  low = 0;
  high = array.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high)/ 2);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

module.exports = binarySearch;
