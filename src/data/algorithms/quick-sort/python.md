```python
def  startSorting(array):
    quickSort(array, 0, len(array) - 1)
    print(array)
    
def  quickSort(arr, left, right):
    if left < right : 
        partitionPoint = partitionArray(arr, left, right)
        quickSort(arr, left, partitionPoint - 1)
        quickSort(arr, partitionPoint + 1, right)
    
def  partitionArray(arr, left, right):
    pivot = arr[left];
    pivotPosition = left;

    while (left < right):
        while (left <= right and arr[left] <= pivot):
            left = left + 1

        while (left <= right and arr[right] > pivot):
            right = right - 1

        if (left < right):
            swap(arr, left, right)
            
    swap(arr, pivotPosition, right)
    return right;

def  swap(arr, left, right):
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
array = [10, 8, 1, 2, 9, 7, 6];
startSorting(array);
```