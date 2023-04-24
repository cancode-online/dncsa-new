public class Main {
    public static void main(String[] args) {

        int[] arr = { 5, 2, 42, 6, 1, 3, 2, 1 };

        for (int i = 0; i < arr.length; i++) {
 
            // nested loop 1 index ahead
            for (int j = i + 1; j < arr.length; j++) {

                // comparing elements
                int temp = 0;
                if (arr[j] < arr[i]) {

                    // write the swap code!
                    ;
                }
            }

            // Printing sorted array 
            System.out.print(arr[i] + " ");
        }
        
    }
}