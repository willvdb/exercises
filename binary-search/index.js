var arr = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'figs', 'grapes'];

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
console.log(binarySearch(arr, 'cherry')); // 2 since arr[2] === 'cherry'

console.log(binarySearch(arr, 'grapes')); // 6 since arr[6] === 'grapes'

console.log(binarySearch(arr, 'banana')); // 1 since arr[1] === 'banana'

console.log(binarySearch(arr, 'eggs')); // 4 since arr[4] === 'eggs'

console.log(binarySearch(arr, 'dates')); // 3 since arr[3] === 'dates'

console.log(binarySearch(arr, 'apple')); // 0 since arr[0] === 'apple'

console.log(binarySearch(arr, 'zebra')); // -1 for not found

module.exports = binarySearch;
