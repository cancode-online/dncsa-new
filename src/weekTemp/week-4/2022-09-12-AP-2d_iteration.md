# Iteration with 2D Array
> Focus is on iteration.  This example uses 2D array with simple ASCII art.  The idea of this example was to incorporate ASCII art with a nursery rhyme.

- title: Iteration with 2D Array
- toc: true
- image: /images/boolean.png
- permalink: /unit/4
- categories: [3.E, C4.7]
- type: ap
- week: 4


```java
/*
 * Creator: Nighthawk Coding Society
 * Mini Lab Name: Hello Series,featuring Monkey Jumpers
 */

/**
 * Class for Monkeys: a 2D array of Monkeys
 * As well as method to print the Poem
 */
class MonkeyLoop {
    //The area between class definition and the 1st method is where we keep data for object in Java
    String [][] monkeys;    //2D Array: AP CSA Unit 8: 2D array of strings
                            //2D array is like a grid [x][y]
                            // or like a spreadsheet [row][column]

    /**
     * Constructor initializes a 2D array of Monkeys
     */
    public MonkeyLoop() {
        //Storing Data in 2D arrays
        monkeys = new String[][]{   //2D array above is just a name, "new" makes a container ("object")
                //Monkey 0
                {
                        "ʕง ͠° ͟ل͜ ͡°)ʔ ",      //[0][0] eyes
                        "  \\_⏄_/  ",      //[0][1] chin
                        "  --0--   ",       //[0][2] body
                        "  ⎛   ⎞   "        //[0][3] legs
                },
                //Monkey 1
                {
                        " ʕ༼ ◕_◕ ༽ʔ",       //[1][0]
                        "  \\_⎏_/  ",
                        "  ++1++  ",
                        "   ⌋ ⌊   "
                },
                //Monkey 2
                {
                        " ʕ(▀ ⍡ ▀)ʔ",       //[2][0]
                        "  \\_⎐_/ ",
                        "  <-2->  ",
                        "  〈  〉 "
                },
                //Monkey 3
                {
                        "ʕ ͡° ͜ʖ ° ͡ʔ",        //[3][0]
                        "  \\_⍾_/  ",
                        "  ==3==  ",
                        "  _/ \\_  "
                },
                //Monkey 4
                {
                        "  (◕‿◕✿) ",          //[4][0]
                        "  \\_⍾_/ ",          //[4][1]
                        "  ==4==  ",          //[4][2]
                        "  _/ \\_ "           //[4][3]
                },

        };
    }

    /**
     * Loop and print monkeys in array
     * ... repeat until you reach zero  ...
     */
    public void printPoem() {
        //begin the poem
        System.out.println();
        System.out.println("Monkey Jumpers Poem in Java Loopy");

        // monkeys (non-primitive) defined in constructor knows its length
        int monkeyCount = monkeys.length;
        for (int i = monkeyCount; i >= 1; i--)  //loops through 2D array length backwards
        {

            //this print statement shows current count of Monkeys
            //  concatenation (+) of the loop variable and string to form a countdown message
            System.out.println(i + " little monkeys jumping on the bed...");

            //how many separate parts are there in a monkey monkey?
            for (int row = 0; row < monkeyCount; row++) {  //cycles through "cells" of 2d array

                /*cycles through columns to print
                each monkey part by part, will eventually print entire column*/
                for (int col = 0; col < monkeys[row].length; col++) {

                    // prints specific part of the monkey from the column
                    System.out.print(monkeys[row][col] + " ");

                    //this is new line between separate parts
                    System.out.println();
                }

                //this new line gives separation between stanza of poem
                System.out.println();
            }

            //countdown for poem, decrementing monkeyCount variable by 1
            monkeyCount -= 1;
        }

        //out of all the loops, prints finishing messages
        System.out.println("No more monkeys jumping on the bed");
        System.out.println("0000000000000000000000000000000000");
        System.out.println("             THE END              ");
    }

    /**
    * A Java Driver/Test method that is the entry point for execution
    */
    public static void main(String[] args)  {
        new MonkeyLoop().printPoem();   //a new monkey list and output in one step
    }

}
MonkeyLoop.main(null);
```

    
    Monkey Jumpers Poem in Java Loopy
    5 little monkeys jumping on the bed...
    ʕง ͠° ͟ل͜ ͡°)ʔ  
      \_⏄_/   
      --0--    
      ⎛   ⎞    
    
     ʕ༼ ◕_◕ ༽ʔ 
      \_⎏_/   
      ++1++   
       ⌋ ⌊    
    
     ʕ(▀ ⍡ ▀)ʔ 
      \_⎐_/  
      <-2->   
      〈  〉  
    
    ʕ ͡° ͜ʖ ° ͡ʔ 
      \_⍾_/   
      ==3==   
      _/ \_   
    
      (◕‿◕✿)  
      \_⍾_/  
      ==4==   
      _/ \_  
    
    4 little monkeys jumping on the bed...
    ʕง ͠° ͟ل͜ ͡°)ʔ  
      \_⏄_/   
      --0--    
      ⎛   ⎞    
    
     ʕ༼ ◕_◕ ༽ʔ 
      \_⎏_/   
      ++1++   
       ⌋ ⌊    
    
     ʕ(▀ ⍡ ▀)ʔ 
      \_⎐_/  
      <-2->   
      〈  〉  
    
    ʕ ͡° ͜ʖ ° ͡ʔ 
      \_⍾_/   
      ==3==   
      _/ \_   
    
    3 little monkeys jumping on the bed...
    ʕง ͠° ͟ل͜ ͡°)ʔ  
      \_⏄_/   
      --0--    
      ⎛   ⎞    
    
     ʕ༼ ◕_◕ ༽ʔ 
      \_⎏_/   
      ++1++   
       ⌋ ⌊    
    
     ʕ(▀ ⍡ ▀)ʔ 
      \_⎐_/  
      <-2->   
      〈  〉  
    
    2 little monkeys jumping on the bed...
    ʕง ͠° ͟ل͜ ͡°)ʔ  
      \_⏄_/   
      --0--    
      ⎛   ⎞    
    
     ʕ༼ ◕_◕ ༽ʔ 
      \_⎏_/   
      ++1++   
       ⌋ ⌊    
    
    1 little monkeys jumping on the bed...
    ʕง ͠° ͟ل͜ ͡°)ʔ  
      \_⏄_/   
      --0--    
      ⎛   ⎞    
    
    No more monkeys jumping on the bed
    0000000000000000000000000000000000
                 THE END              


## Hacks (Mini-lab)
> Build you own Jupyter Notebook.  Feel free to use any ASCII art of your choice, there are some much better ones [here](https://www.asciiart.eu/animals/monkeys).  My little guys were made up out of my head while looking at unicode characters.

- Print monkeys horizontally versus vertically.
- Build more or entire rhyme for the "Monkey Jumpers" countdown poem
- Add names or other properties to the monkeys
 
> In you notebook, illustrate or answer some of these questions.
- Is this program in more of an Imperative Programming Style or OOP style? Explain.
    - Observe variable assignments.
    - Is each Monkey an object?
    - Build an where the monkey is an object versus two-dimensional array.  This would be leading into Unit 5 requirements.
- Study loops and zero based counting
    - Study two-dimensional (2D) array references
    - Explain different way you can access a 2D array
