```python
def merge(arr, left_arr, left_size, right_arr, right_size):
    i = 0
    j = 0
    k = 0
    while i < left_size and j < right_size:
        if left_arr[i] < right_arr[j]:
            arr[k] = left_arr[i]
            k = k + 1
            i = i + 1
        else:
            arr[k] = right_arr[j]
            k = k + 1
            j = j + 1

    while i < left_size and k < len(arr):
        arr[k] = left_arr[i]
        k = k + 1
        i = i + 1

    while j < right_size and k < len(arr):
        arr[k] = right_arr[j]
        k = k + 1
        j = j + 1


def merge_sort(arr, size):
    if size < 2:
        return;

    mid = round(size / 2)

    left_arr = arr[0:mid]
    right_arr = arr[mid:size]

    merge_sort(left_arr, mid)
    merge_sort(right_arr, size - mid)

    merge(arr, left_arr, mid, right_arr, size - mid)


def start_sorting():
    array = [10, 8, 1, 2, 9, 7, 6]
    merge_sort(array, len(array))
    print(array)


start_sorting()
```