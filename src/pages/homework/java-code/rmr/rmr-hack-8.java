public class Main {
    public static void main(String[] args) {

        int[][] array =  { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }, { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

        int num = 5;

        int sum = 0;

        for (int i = 0; i < array.length; i++) {

            for ( int j = 0; j < array[i].length; j++) {

                if (num == array[i][j]) {
                    sum++;
                    System.out.println("Found " + num + " at index " + i + "," + j);
                }

            }

        }

        System.out.println("Found " + num + " " + sum + " times");
        
    }
}