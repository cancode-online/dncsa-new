class BinarySearch {
 
        public int search(int[] array, int start, int end, int value) {
            if (end >= start) {
                int mid = (start + end) / 2;
                if (mid < array.length && array[mid] == value) {
                    return mid;
                }
                if (mid < array.length && array[mid] > value) {
                    return search(array, start, mid - 1, value);
                }

                return search(array, mid + 1, end, value);
    
            }
            return -1;
        }
}

public class Main {
    public static void main(String[] args) {

        int[] array = { 1, 7, 13, 15, 19, 22, 23, 44, 50, 55, 100 };

        BinarySearch binarySearch = new BinarySearch();
        System.out.println(binarySearch.search(array, 0, 9, 13));
    }

}