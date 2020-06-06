```java
import java.util.Arrays;
public class QuickSortExample{
public void  swap(int[] arr, int left, int right) {
    int temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}
public int partitionArray(int[] arr,int left,int right) {
    int pivot = arr[left];
    int pivotPosition = left;
    while (left < right) {
        while (left <= right && arr[left] <= pivot) {
            left++;
        }
        while (left <= right && arr[right] > pivot) {
            right--;
        }
        if (left < right) {
            swap(arr, left, right);
        }
    }
    swap(arr, pivotPosition, right);
    return right;
}
public void quickSort(int[] arr,int left,int right) {
    if (left < right) {
        int partitionPoint = partitionArray(arr, left, right);
        quickSort(arr, left, partitionPoint-1);
        quickSort(arr, partitionPoint + 1, right);
    }
}
  public static void main(String[] args){
     QuickSortExample quickSortExample = new QuickSortExample();
     int[] array = {10, 8, 1, 2, 9, 7, 6};
  	 quickSortExample.quickSort(array, 0, array.length - 1);
  	 System.out.println(Arrays.toString(array));
  }
}
```