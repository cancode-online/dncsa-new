class Book {
    // static variable to keep track of number of books
    private static int numBooks = 0;
    // the scope of this variable is the entire class

    private String title;
    // while the scope of this variable is on a specific instance of the class

    public Book(String title) {
        this.title = title;

        // increment number of books every time a book object is created
        numBooks++;
    }

    // static method to access numBooks variable
    public static int getNumBooks() {
        return numBooks;
    }
}

class Main {
    public static void main(String[] args) {
        Book book1 = new Book("The Catcher in the Rye");
        Book book2 = new Book("To Kill a Mockingbird");
        Book book3 = new Book("1984");

        System.out.println("Number of books created: " + Book.getNumBooks());
    }
}
