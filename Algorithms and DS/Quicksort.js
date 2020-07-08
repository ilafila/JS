
let items = [5, 1, 4, 7, 9, 10];

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call
var result = quickSort(items, 0, items.length - 1);
console.log(result);

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)];
    i = left;
    j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}