# Using Java Objects
> Learn the relationship between a Class and an Object.  A Class is a template for an Object.  An Object is an instances of a Class.  Learning can be done in different methods and different order.  This article illustrates multiple methods and learnings obtained using different approaches.

- title: Using Objects
- toc: true
- categories: [3.C]
- permalink: /unit/2
- image: /images/using_java_objects.png
- categories: [3.E, C3.0, C3.1, C4.5]
- type: ap
- week: 2

## Console Based Menu
Java imports allow user input and console output to be displayed in Terminal 

Objects Used
- Makes Object from Scanner Class to obtain inputs / menu selection from User
- Use System Class, to call static methods System.out.print and System.out.println to output to console
- User Math Class, to call static method Math.random() to generate random number

Other College Board Topics
- A 2D array is used to store COLORS
- A Control Structure, Switch, is used to process Menu select to code that performs related action

Key PBL Topic
- Menu class when instantiated with new Menu() takes over Frontend experience with user.  This is relevant to Draw Lab in this article and how Spring Boot works in Web programming.  Objects are intended to encapsulate Frontend, Backend or experience ...  Web Site control flow, Database CRUD operations, or a Menu in terminal (this example)   


```java
// imports allow you to use code already written by others.  It is good to explore and learn libraries.  The names around the dots often give you a hint to the originator of the code.
import java.util.Scanner; //library for user input
import java.lang.Math; //library for random numbers


public class Menu {
    // Instance Variables
    public final String DEFAULT = "\u001B[0m";  // Default Terminal Color
    public final String[][] COLORS = { // 2D Array of ANSI Terminal Colors
        {"Default",DEFAULT},
        {"Red", "\u001B[31m"}, 
        {"Green", "\u001B[32m"}, 
        {"Yellow", "\u001B[33m"}, 
        {"Blue", "\u001B[34m"}, 
        {"Purple", "\u001B[35m"}, 
        {"Cyan", "\u001B[36m"}, 
        {"White", "\u001B[37m"}, 
    };
    // 2D column location for data
    public final int NAME = 0;
    public final int ANSI = 1;  // ANSI is the "standard" for terminal codes

    // Constructor on this Object takes control of menu events and actions
    public Menu() {
        Scanner sc = new Scanner(System.in);  // using Java Scanner Object
        
        this.print();  // print Menu
        boolean quit = false;
        while (!quit) {
            try {  // scan for Input
                int choice = sc.nextInt();  // using method from Java Scanner Object
                System.out.print("" + choice + ": ");
                quit = this.action(choice);  // take action
            } catch (Exception e) {
                sc.nextLine(); // error: clear buffer
                System.out.println(e + ": Not a number, try again.");
            }
        }
        sc.close();
    }

    // Print the menu options to Terminal
    private void print() {
        //System.out.println commands below is used to present a Menu to the user. 
        System.out.println("-------------------------\n");
        System.out.println("Choose from these choices");
        System.out.println("-------------------------\n");
        System.out.println("1 - Say Hello");
        System.out.println("2 - Output colors");
        System.out.println("3 - Loading in color");
        System.out.println("0 - Quit");
        System.out.println("-------------------------\n");
    }

    // Private method to perform action and return true if action is to quit/exit
    private boolean action(int selection) {
        boolean quit = false;

        switch (selection) {  // Switch or Switch/Case is Control Flow statement and is used to evaluate the user selection
            case 0:  
                System.out.print("Goodbye, World!");
                quit = true;
                break;
            case 1:
                System.out.print("Hello, World!");
                break;
            case 2:
                for(int i = 0; i < COLORS.length; i++)  // loop through COLORS array
                    System.out.print(COLORS[i][ANSI] + COLORS[i][NAME]);
                break;
            case 3:
                System.out.print("Loading...");
                for (int i = 0; i < 20; i++) {  // fixed length loading bar
                    int random = (int) (Math.random() * COLORS.length);  // random logic
                    try {
                        Thread.sleep(100);  // delay for loading
                    } catch (Exception e) {
                        System.out.println(e);
                    }
                    System.out.print(COLORS[random][ANSI] + "#");
                }
                break;
                    
            default:
                //Prints error message from console
                System.out.print("Unexpected choice, try again.");
        }
        System.out.println(DEFAULT);  // make sure to reset color and provide new line
        return quit;
    }

    // Static driver/tester method
    static public void main(String[] args)  {  
        new Menu(); // starting Menu object
    }

}
Menu.main(null);
```

## Desktop GUI Menu
Swing and AWT imports allow Java to provide a Graphical User Interface on the desktop.

Other College Board Topics
- A 1D array is used to store MENUS
- A Control Structure, if-else if-else, is used to process Menu selection to code that performs related action

Using Objects
- Javax Swing UI (JFrame)
- Timer with a TimerTask to allow action to repeatedly occur without halting thread.


```java
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.util.Timer;
import java.util.TimerTask;
// Graphical-User-Interface for Desktop in Java using Java Swing. 
public class MenuJFrame extends JFrame implements ActionListener {
    private JFrame frame;
    private JMenuBar menubar;
    private JMenu menu;
    private JLabel message = new JLabel("Click on Menu to select an action.");
    public final String[] MENUS = { // 1D Array of Menu Choices
        "Hello", "Colors", "Loading bar",  
    };
    // Statics to assist with timer and messaging, single copy (no instance)
    private	static int delay = 20;
    private	static int step = 1;
    private static String hashes = "";

    // Constructor enables the Frame instance, the object "this.frame"
    public MenuJFrame(String title) {
	    // Initializing Key Objects
        frame = new JFrame(title);
	    menubar = new JMenuBar();
	    menu = new JMenu("Menu");

        // Initializing Menu objects and adding actions
        for (String mx : MENUS) {
            JMenuItem m = new JMenuItem(mx);
            m.addActionListener(this);
            menu.add(m); 
        }

        // Adding / Connecting Objects
        menubar.add(menu);
        frame.setJMenuBar(menubar);
        frame.add(message);

        // Sets JFrame close operation to Class variable JFrame.EXIT_ON_CLOSE
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        // set the size of window based on objects
        frame.setSize(300,200);

        // makes the frame object visible according to properties previously set
        frame.setVisible(true);  // flow of control shifts to frame object
    }

    // event from user selecting a menu option
    public void actionPerformed(ActionEvent e) {
        // local variable to ActinEvent
        String selection = e.getActionCommand();  // menu selection
        String msg; // local variable to create response from action
        final String[] COLORS = {"Red", "Green", "Blue"};  // add more colors here
 	    final String start_msg = "<html>";  // html building
       	final String end_msg = "</html>";
       	final String hash = "#";

        // run code based on the menuItem that was selected
        if ( selection.equals(MENUS[0]) ) {  // Hello Action
            msg = "Hello, World";
            message.setText(msg);
        } else if ( selection.equals(MENUS[1]) ) { // Color Action
            msg = start_msg + "<p>" + selection + "</p>";
            for (String color : COLORS) {
                msg += "<font color=" + color + ">" + color + " </font>";
            }
            msg += end_msg;
            message.setText(msg);
        } else {  // Loading Bar Action
	    String loading = "<p>Loading</p>";
            // Code to run on a Timer
            Timer timer = new Timer();
            TimerTask task = new TimerTask() {
                public void run() {  // Method for TimerTask
                    // Static and Local variables used to manage message building
                    int random = (int) (Math.random() * COLORS.length);  // random logic
                    MenuJFrame.hashes +=  "<font color=" + COLORS[random] + ">" + hash + "</font>";
                    String msg = start_msg + loading + hashes + end_msg;
                    message.setText(msg);
                    
	  	            // Shutdown timer and reset data
                    if(MenuJFrame.step++ > MenuJFrame.delay) {
                        MenuJFrame.step = 1; MenuJFrame.hashes="";
                        timer.cancel();
                    }
                };
            };
            // Schedule task and interval
            timer.schedule(task, 200, 200);
            message.setText(start_msg + loading + hash + end_msg);  // prime/initial display
        }
    }

    // Driver turn over control the GUI
    public static void main(String[] args) {
        // Activates an instance of MenuJFrame class, which makes a JFrame object
        new MenuJFrame("Menu");
    }
}
MenuJFrame.main(null);
```

## Code.org Object Oriented Programming - The Neighborhood
Students learn fundamental Java concepts as they navigate and interact with The Neighborhood with Painter objects and create new types of Painters to expand the capabilities of their programs.

College Board Topics
- Inheritance (extends) is introduced early in this activity
- Conditional statements, While loops, and Boolean expressions

Using Objects
- Code.org Painter class and objects

Activity Page Start: [Code.org CSA1](https://studio.code.org/s/csa1-2022)

![Visuals](images/code_org_painter.png)


## Hacks
College Board and CTE competences.  
- Documentation / Analysis. Describe with Markdown Cell(s) and triple backtick code fragments that answers to the following from your work...
    - Explain where a Class is defined 
    - Explain where an instances of a Class is defined
    - Explain where an object is Calling a Method
    - Explain where an object is Mutating data
    - Describe Console, GUI differences, or Code.org differences.
- Exploration work
Build a new Console or GUI lab for your own solution of interest, this is great opportunity to visualize data from Math, Physics, or other class using Math library.  Look to make these changes in your work 
    - Make constructors of different signatures.
    - Use Wrapper Classes of Integer and Double for defining object instance or static data in the Class
    - Use the [Math Class](https://www.javatpoint.com/java-math) in performing calculations
- Code.org learning
Follow the Neighborhood lessons and work through the OOP Unit.
