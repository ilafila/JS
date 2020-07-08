function binarySearch(arr, key){
  let left = 0;
  let right = arr.length - 1;

  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] === key){
      return mid;
    }
    if(arr[mid] < key){
      left = mid + 1;
    }
    if(arr[mid] > key){
      right = mid - 1;
    }
  }
  return -1;
}

function binarySearchRecursive(arr, left, right, key){
  if(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] === key){
      return mid;
    }
    if(arr[mid] < key){
      return binarySearchRecursive(arr, mid + 1, right, key);
    }
    if(arr[mid] > key){
      return binarySearchRecursive(arr, left, mid - 1, key);
    }
  }
  return -1;

}

const test = [1, 2, 3, 4, 5];
console.log(binarySearchRecursive(test, 0, test.length - 1, 6));
