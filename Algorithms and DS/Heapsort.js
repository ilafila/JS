function heapSort(array) {
  buildMaxHeap(array);

  let lastElement = array.length - 1;

  while (lastElement > 0) {
    let tmp = array[0];
    array[0] = array[lastElement];
    array[lastElement] = tmp;

    heapify(array, 0, lastElement);
    lastElement -= 1;
  }
}

function buildMaxHeap(arr) {
  let i = Math.floor((arr.length / 2) - 1);

  while (i >= 0) {
    heapify(arr, i, arr.length);
    i -= 1;
  }
}

function heapify(arr, start, end) {
  let index, leftChild, rightChild;

  while (start < end) {
    index = start;
    leftChild = 2 * start + 1;
    rightChild = leftChild + 1;

    if (leftChild < end && arr[leftChild] > arr[index]) {
      index = leftChild;
    }

    if (rightChild < end && arr[rightChild] > arr[index]) {
      index = rightChild;
    }

    if(index == start){
      return;
    }

    let tmp = arr[index];
    arr[index] = arr[start];
    arr[start] = tmp;

    start = index;
  }
}

let test = [3, 19, 1, 14, 8, 7];
heapSort(test);
console.log(test);