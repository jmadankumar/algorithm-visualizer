const array = [10, 8, 1, 2, 9, 7, 6];
quicksort(array);

function quicksort(arr) {
    quicksortArr(arr, 0, arr.length - 1);
    console.log(arr);
}

function quicksortArr(arr, left, right) {
    console.log('quicksortArr');
    if (left < right) {
        console.log('left', left);
        console.log('right', right);
        const partition_border = partition(arr, left, right);
        console.log('partition_border ', partition_border);
        quicksortArr(arr, left, partition_border);
        quicksortArr(arr, partition_border + 1, right);
    }
}
function partition(arr, left, right) {
    const pivot = arr[(left + right) / 2];
    console.log('partition');
    console.log('left', left);
    console.log('arr', arr);
    console.log('right', right);
    console.log('pivot', pivot);
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left >= right) {  
            console.log('after swap', arr);
            return right;
        }
        swap(arr, left, right);
        left++;
        right--;
    }
    
}
function swap(arr, left, right) {
    console.log('swap');
    const leftArr = array[left];
    const rightArr = array[right];
    arr[left] = rightArr;
    arr[right] = leftArr;
}