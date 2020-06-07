```java
import java.util.Arrays;

public class MergeSortExample {
    public void merge(int[] arr, int[] leftArr, int leftSize, int[] rightArr, int rightSize) {
        int i = 0, j = 0, k = 0;
        while (i < leftSize && j < rightSize) {
            if (leftArr[i] < rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }
        while (i < leftSize) {
            arr[k++] = leftArr[i++];
        }
        while (j < rightSize) {
            arr[k++] = rightArr[j++];
        }
    }
    public void mergeSort(int[] arr, int size) {
        if (size < 2) {
            return;
        }
        int mid = Math.round(size / 2);

        int[] leftArr = new int[mid];
        for (int i = 0; i < mid; i++) {
            leftArr[i] = arr[i];
        }
        int[] rightArr = new int[size - mid];
        for (int j = 0; j < size - mid; j++) {
            rightArr[j] = arr[mid + j];
        }

        mergeSort(leftArr, mid);
        mergeSort(rightArr, size - mid);

        merge(arr, leftArr, mid, rightArr, size - mid);

    }
    public void startSorting() {
        int[] array = {
            10,
            8,
            1,
            2,
            9,
            7,
            6
        };
        mergeSort(array, array.length);
        System.out.println(Arrays.toString(array));
    }
    public static void main(String[] args) {
        MergeSortExample mergeSortExample = new MergeSortExample();
        mergeSortExample.startSorting();
    }
}
```