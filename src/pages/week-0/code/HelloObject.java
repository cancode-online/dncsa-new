// Define Class with Constructor returning Object
class HelloObject {
    private String hello;   // instance attribute or variable
    public HelloObject() {  // constructor
        hello = "Hello, World!";
    }
    public String getHello() {  // getter, returns value from inside the object
        return this.hello;  // return String from object
    }
    public static void main(String[] args) {    
        HelloObject ho = new HelloObject(); // Instance of Class (ho) is an Object via "new HelloObject()"
        System.out.println(ho.getHello()); // Object allows reference to public methods and data
    }
}

// Judge0 Activation (pretend it's not here)
class Main {
    public static void main(String[] args) {
        HelloObject.main(null);
    }
}