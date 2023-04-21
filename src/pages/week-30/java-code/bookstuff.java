import java.util.Random;

// This is the class of interest
class Book {

    // These two variables are the attributes of the class
    public String title;
    public String id;
    // Notice how they are public, we'll talk about this later

    // This is the constructor of the class
    public Book(String title) {
        this.title = title;
        Random rand = new Random();
        this.id = Integer.toString(rand.nextInt(50) + 1);
    }

    // This is a method of the class
    public String toString() {
        return "Book Title: " + this.title + "\n" + "Book ID: " + this.id;
    }
    // This is another property of the class
    // that is prepended with the public keyword
}

class Main {
    public static void main(String[] args) {

        // This is how we create an instance of the class
        Book book1 = new Book("The Hobbit");
        Book book2 = new Book("The Lord of the Rings");

        // Here we are using the toString method as defined in the class
        System.out.println(book1);
        System.out.println(book2);
    }
}