public class Main {
    public static void main(String[] args) {

        int[][] twodarray = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };

        // print the 2d array

        for (int i = 0; i < twodarray.length; i++) {

        for (int j = 0; j < twodarray[i].length; j++) {

        System.out.print(twodarray[i][j] + " ");

        }

        System.out.println();

        }
        
    }
}