import java.util.Random;

public class Main {

    public static void main(String[] args) {

        int[] arr = new int[5000];
        Random rand = new Random();

        // Fill the array with random numbers
        for (int i = 0; i < arr.length; i++) {
            arr[i] = rand.nextInt(10000);
        }

        int swaps = 0;
        int comparisons = 0;

        // Bubble sort algorithm
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                comparisons++;
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swaps++;
                }
            }
        }

        // Print the sorted array
        System.out.println("Sorted array:");

        // Print the number of swaps and comparisons
        System.out.println("\nNumber of swaps: " + swaps);
        System.out.println("Number of comparisons: " + comparisons);
    }
}
