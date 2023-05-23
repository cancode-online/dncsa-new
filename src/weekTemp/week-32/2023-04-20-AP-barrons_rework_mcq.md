# Book and Library

> This FRQ was created from looking at a Barrons 2011 MCQ. Book class, Library and Simulation

- toc: true
- categories: []
- type: ap
- week: 32

## Extend Book Class

> Consider inheritance hierarchy, in which Novel and Textbook are subclasses of Book

```
          ---------------
          |    Book     |
          ---------------
           ^          ^
          /            \
         /              \
---------------        ---------------
|    Novel    |        |  TextBook   |
---------------        ---------------
```

## Perform these actions, answer questions, adjust code.

### class Book (Part 1) Close Book Test

1. Define 1 argument constructor using title
2. Define toString method for id and title
3. Generate unique id for each object
4. Create a public getter that has Book Count
5. Define tester method that initializes at least 2 books, outputs id and title, and provides a count of books in library.

### extended Classes (Part 2) Try to use alternate forms of loops and techniques for construction.

1. Ensure Novel and Textbook run the Constructor from Book.
2. Create instance variables unique to Novel has Author, Textbook has publishing company. New items are not required by Constructor.
3. Make Getters and Setters for all new items. For instance, be able to set items not required by constructor.
4. Add a time when book entered the library. This should be same for Parent and Subclasses.
5. Define tester method to test all items.

### Simulation (Part 3)

1. Build a Tester Method that does a Simulation.
2. Define a default method in Book that returns "current shelfLife" from date/time of construction. (Hint, think about capturing time in sorts)
3. Define shelfLife expiration methods as needed in TextBook and Novel.
   - A TextBook has a fixed shelf life based on the date/time of constructor. (Hint, simulation 3 yrs as 3000 milliseconds)
   - A Novel has a computed shelf life of expiration, the simulation should extend shelf life if a certain number of return stamps where placed in the book. (Hint, 3 return stamps renews for an extra year)
4. Use a sleep in Java to assist with simulation
5. Make a method that determines if book has shelf life remaining, try to have title and on/off status in output.

```Java
// Book and Library Data Structure
class Book {
    // Static attributes are called "Class Variables", the are not part of the Object
    private static ArrayList<Book> library = new ArrayList<Book>();  // Library as static ArrayList
    public static final long YEAR = 1000;  // year in milliseconds, final as it does not change

    // The remaining attributes are "Instance Variables"
    private String title;
    private int id;
    // protected variables can be referenced in extended classes, semi-private
    protected long created;
    protected long life;

    // 1 argument constructor, note that no argument constructor is NOT supported
    public Book(String title) {  // Part 1.1, Define 1 argument constructor using title
        this.title = title;
        Book.library.add(this);  // library size used to set
        this.id = this.getBookCount();  // Part 1.3, Generate unique id for each object

        // init time for simulation
        this.created = System.currentTimeMillis();  // Part 2.4 Add a time when book entered the library.
        this.life = this.created; // set offset for shelf life
        this.setShelfLife(1);  // provide a default for shelf life
    }

    /////////////////////////// Part 1 Methods ///////////////////////////////

    /* getter for id */
    public int getId() {
        return this.id;
    }

    /* size is used as unique id, deletes can't occur in this implementation */
    public static int getBookCount() { // Part 1.4, Create a public getter that has Book Count
        return Book.library.size();
    }

    /* returns an Immutable List of books
     * we don't want anyone changing this list outside of provided public methods
     * unmodifiable means ... this could create everything to break (unique id, simulation, etc)
     * if any attempt occurs to modify the returned list, whether direct or via its iterator
     * this results in an UnsupportedOperationException.
    */
    public static List<Book> getLibrary() {
        return Collections.unmodifiableList(Book.library);  // ArrayList should not be changed outside of this Book class
    }

    /*
     * The default implementation of toString() method returns the ...
     * concatenation of class name and hashcode
     * This implementation contains ...
     * id concatenated to default toString (super) title, and adds aging
     */
    public String toString() {   // Part 1.2, Define toString method for id and title
        return(
            this.id + "." + super.toString() +  ": " + // id is unique, but super shows how Java ids object
            this.title) + ", " + // title requirement
            "Shelf Life " + String.format("%.1f",this.getShelfLife()  // added for simulation
            );
    }

    /* Part 1.5, Define tester method that initializes at least 2 books,
                 outputs id and title,
                 and provides a count of books in library,
                 Part 2/3 now covertly tests adding to libary.
                 and tests printLibary
    */
    public static void main(String [] args) {

        /////// During Part 1 of 3 parts this is technique used for adding and display /////
        System.out.println("Libary Book Count: " + Book.getBookCount());  // Notice how this method exist and works before any books are created
        // This shows intializing Book Array with new Book objects
        Book[] books = {    // Uses an Array to store the creation of 3 books
            new Book("Barron's Computer Science \"A\""),  // Set a new Book object as array element.
            new Book("Angels and Demons")
        };
        // Iterates through new Book objects
        for (Book book : books) {  // Use Foreach syntax to iterate over array
            System.out.println(book);   // this is same as book.toString()
        }
        System.out.println("Libary Book Count: " + Book.getBookCount());

        /////// During Part 2 and 3, a library Data Structure behind the scenes, removing need for Book array /////
        String narnia = "Lion, Witch, and a Wardrobe";
        System.out.println("add: " + narnia);
        new Book(narnia);  // this is stored in static library ArrayList
        Book.printLibrary();
        System.out.println("Libary Book Count: " + Book.getBookCount());
    }

    /////////////////////////// Part 3 Methods ///////////////////////////////

    /* increase book shelf life by years */
    public void setShelfLife(int years) {
        this.life += years * Book.YEAR;  // add years to shelf life
    }

    /* book aging, note: Novel overrides this method */
    public void ageShelfLife() {  // Part 3.3, Define shelfLife expiration methods as needed in TextBook and Novel
        this.life -= Book.YEAR;  // remove a year
        if (getShelfLife() < 0.1) // small number zero out, this is for double floating point condition
            this.life = this.created;
    }

    /* calculate shelf life in years */
    public double getShelfLife() {  // Part 3.2, Define a default method in Book that returns "current shelfLife"
        return (this.life - this.created) / Book.YEAR;
    }

    /* calculatee boolean that determines if book has shelf life */
    public boolean hasShelfLife() {  // Part 3.5, Make a method that determines if has shelf life remaining
        return this.life > this.created;
    }

    /* prints "active" books in library */
    public static void printLibrary() {
        // Here are save books, but where could this process go if I want a library of books across subclasses
        System.out.println("Active books");
        for (Book book: Book.library) {
            if (book.hasShelfLife())  // Active book check
                System.out.println(book);
        }
    }

}
Book.main(null);
```

    Libary Book Count: 0
    1.REPL.$JShell$12$Book@7bfb814c: Barron's Computer Science "A", Shelf Life 1.0
    2.REPL.$JShell$12$Book@2e4e133: Angels and Demons, Shelf Life 1.0
    Libary Book Count: 2
    add: Lion, Witch, and a Wardrobe
    Active books
    1.REPL.$JShell$12$Book@7bfb814c: Barron's Computer Science "A", Shelf Life 1.0
    2.REPL.$JShell$12$Book@2e4e133: Angels and Demons, Shelf Life 1.0
    3.REPL.$JShell$12$Book@2dbb3ccc: Lion, Witch, and a Wardrobe, Shelf Life 1.0
    Libary Book Count: 3

```Java
// Novel customizations to Book
class Novel extends Book {
    private String author;  // Part 2.2 Create instance variables unique to Novel has Author
    private int checkouts = 0;

    // Two argument, not according to requirements but is convenient
    public Novel(String title, String author) {
        super(title);  // Part 2.1 Ensure Novel and Textbook run the Constructor from Book.
        this.author = author;
        super.setShelfLife(1);  // adds 1 year to default age
    }

    /* book aging method override for Novel  */
    @Override
    public void ageShelfLife() {  // Part 3.3, Define shelfLife expiration methods as needed in Novel
        final int bookThreshold = 3; // arbitrary constant for simulation

        // book must have life to be checked out
        if (this.life > this.created) {

            this.checkouts += (int)(Math.random() * (bookThreshold + 1));  // book checkout simulator
            // test if book has checkouts to earn shelf life
            if (this.checkouts >= bookThreshold) {
                this.checkouts -= bookThreshold;
                this.setShelfLife(1);   // add YEAR to shelf life
            } else {
                super.ageShelfLife();   // age book
            }

        }
    }

    @Override
    public String toString() {
        return(super.toString() + ", " + this.author);
    }

    /* Part 2.5 for Novel, Define tester method to test all items,
        adds 2 novels,
        shows book count before and after,
        prints items in library
    */
    public static void main(String [] args) {

        System.out.println("Libary Book Count: " + Book.getBookCount());  // Note library count is truly static acroos inheritance

        Novel[] novels = {    // Same technique as in Book tester
            new Novel("The Da Vincii Code", "Dan Brown"),
            new Novel("Prinde and Prejudice", "Jane Austen")
        };

        for (int i = 0; i < novels.length; i++) {  // Use of conventional loop for variation
            System.out.println(novels[i]);  // still works with toString()
        }

        System.out.println("Libary Book Count: " + Book.getBookCount());

    }
}
Novel.main(null);

class CheckOut extends TimerTask {
    public void run() {
       System.out.println("Hello World!");
    }
}
```

    Libary Book Count: 3
    4.REPL.$JShell$14$Novel@4ccda4b1: The Da Vincii Code, Shelf Life 2.0, Dan Brown
    5.REPL.$JShell$14$Novel@69053962: Prinde and Prejudice, Shelf Life 2.0, Jane Austen
    Libary Book Count: 5

```Java
// TextBook customizations to Book
class TextBook extends Book {
    private String publisher;  // Part 2.2 Create instance variables unique to TextBook has publisher

    // Single argument
    public TextBook(String title) {
        super(title);  // Part 2.1 Ensure Novel and Textbook run the Constructor from Book.
        super.setShelfLife(2);  // adds 2 years to default age
    }

    // Two argument for ease of use
    public TextBook(String title, String publisher) {
        this(title);  // call to single arg constructor
        this.setPublisher(publisher);
    }

    ///// 2.3 Make Getters and Setters for all new items. /////
    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getPublisher() {
        return this.publisher;
    }

    @Override
    public String toString() {
        return(super.toString() + ", " + this.getPublisher());
    }

    /* Part 2.5 for TextBook, Define tester method to test all items,
        as an extra uses 2D array for static content
        adds 2 textbooks from 2D array,
        uses single arg constructor and setter to initialize,
        prints book as it is added
        shows book count at end
    */
    public static void main(String [] args) {

        System.out.println("Libary Book Count: " + Book.getBookCount());  // Note library count is truly static acroos inheritance

        // 2D array initialization, just for fun
        String [][] books = {
            { "e=MC^2 a Biography",
              "Pan Books"},                        // row 0

            { "The Practice of Programming",
              "Addison-Wesley Professional Computing" }              // row 1
        };

        // One by One "Consturction" using single arguement constructor
        for (int i = 0; i < books.length; i++) {  // loop over 2D array
            // extract data from 2D array
            String title = books[i][0];
            String publisher = books[i][1];

            // setup object in parts
            TextBook book = new TextBook(title);  // single argument constructor
            book.setPublisher(publisher);   // using setter

            // show objects and progrssion of counter
            System.out.println(book);
            System.out.println("Libary Book Count: " + Book.getBookCount());
        }

    }
}
TextBook.main(null);
```

    Libary Book Count: 5
    6.REPL.$JShell$17$TextBook@1d2c35d2: e=MC^2 a Biography, Shelf Life 3.0, Pan Books
    Libary Book Count: 6
    7.REPL.$JShell$17$TextBook@e1ec1e6: The Practice of Programming, Shelf Life 3.0, Addison-Wesley Professional Computing
    Libary Book Count: 7

```Java
// Library Simulation
public class LibraryManager
{
    // Part 3.1, Build a Tester Method that does a Simulation.
    public static void main(String[] args) throws InterruptedException {
        int years = 5; // Simulation years
        // Sleep in loop creates delay for simulation
        for (int i = 0; i < years; i++) {
            System.out.println("Year: " + i);
            Book.printLibrary();
            System.out.println();
            Thread.sleep(Book.YEAR);  // Part 3.4, Use a sleep in Java to assist with simulation
            // Loop through books in Library
            for (Book book : Book.getLibrary()) {
                book.ageShelfLife();  // apply aging formula
            }

        }

    }
}
LibraryManager.main(null);
```

    Year: 0
    Active books
    1.REPL.$JShell$12$Book@7bfb814c: Barron's Computer Science "A", Shelf Life 1.0
    2.REPL.$JShell$12$Book@2e4e133: Angels and Demons, Shelf Life 1.0
    3.REPL.$JShell$12$Book@2dbb3ccc: Lion, Witch, and a Wardrobe, Shelf Life 1.0
    4.REPL.$JShell$14$Novel@4ccda4b1: The Da Vincii Code, Shelf Life 2.0, Dan Brown
    5.REPL.$JShell$14$Novel@69053962: Prinde and Prejudice, Shelf Life 2.0, Jane Austen
    6.REPL.$JShell$17$TextBook@1d2c35d2: e=MC^2 a Biography, Shelf Life 3.0, Pan Books
    7.REPL.$JShell$17$TextBook@e1ec1e6: The Practice of Programming, Shelf Life 3.0, Addison-Wesley Professional Computing

    Year: 1
    Active books
    4.REPL.$JShell$14$Novel@4ccda4b1: The Da Vincii Code, Shelf Life 1.0, Dan Brown
    5.REPL.$JShell$14$Novel@69053962: Prinde and Prejudice, Shelf Life 3.0, Jane Austen
    6.REPL.$JShell$17$TextBook@1d2c35d2: e=MC^2 a Biography, Shelf Life 2.0, Pan Books
    7.REPL.$JShell$17$TextBook@e1ec1e6: The Practice of Programming, Shelf Life 2.0, Addison-Wesley Professional Computing

    Year: 2
    Active books
    5.REPL.$JShell$14$Novel@69053962: Prinde and Prejudice, Shelf Life 4.0, Jane Austen
    6.REPL.$JShell$17$TextBook@1d2c35d2: e=MC^2 a Biography, Shelf Life 1.0, Pan Books
    7.REPL.$JShell$17$TextBook@e1ec1e6: The Practice of Programming, Shelf Life 1.0, Addison-Wesley Professional Computing

    Year: 3
    Active books
    5.REPL.$JShell$14$Novel@69053962: Prinde and Prejudice, Shelf Life 5.0, Jane Austen

    Year: 4
    Active books
    5.REPL.$JShell$14$Novel@69053962: Prinde and Prejudice, Shelf Life 4.0, Jane Austen
