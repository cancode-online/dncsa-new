public class Main {
    public static void main(String[] args) {

        int[][] array = { {1,2,3},{-1,-2,-3},{4,5,6} };

        // print the 2d array

        int sum = 0;

        for (int i = 0; i < array.length; i++) {

            sum += array[i][i];
            System.out.print(array[i][i] + " ");

        }

        System.out.println();

        System.out.print(sum);
        
    }
}