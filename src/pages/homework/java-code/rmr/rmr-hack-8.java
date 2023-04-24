public class Main {
    public static void main(String[] args) {

        int[] arr = { 5, 2, 42, 6, 1, 3, 2, 1 };

        for (int i = 0; i < arr.length; i++) {
 
            // nested loop 1 index ahead
            for (int j = i + 1; j < arr.length; j++) {

                // comparing elements
                int temp = 0;
                if (arr[j] < arr[i]) {

                    // swapping
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;

                }
            }

            if (arr[i] % 2 == 1) {

                // Printing sorted array 
                System.out.print(arr[i] + " ");

            }

        }

        System.out.println();

        for (int i = 0; i < arr.length; i++) {
 
            // nested loop 1 index ahead
            for (int j = i + 1; j < arr.length; j++) {

                // comparing elements
                int temp = 0;
                if (arr[j] < arr[i]) {

                    // swapping
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;

                }
            }

            if (arr[i] % 2 == 0) {

                // Printing sorted array 
                System.out.print(arr[i] + " ");

            }
        }
        
    }
}