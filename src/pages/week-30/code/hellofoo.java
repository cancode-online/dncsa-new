class HelloFoo {
    public HelloFoo(String name) {
        System.out.println("Hello " + name + "!");
    }
}

class Main {
    public static void main(String[] args) {
        // Creates a new instance of the HelloFoo 
        // class and passes in a string into the constructor
        HelloFoo foo = new HelloFoo("Mr. Mort");
    }
}