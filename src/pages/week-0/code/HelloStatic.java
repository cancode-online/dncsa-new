// Define Static Method within a Class
class HelloStatic {
    // Java standard runtime entry point
    public static void main(String[] args) {    
        System.out.println("Hello World!");
    }
}
    
class Main {
    public static void main(String[] args) {
        // A method call allows us to execute code that is wrapped in Class
        HelloStatic.main(null); // Class prefix allows reference of Static Method
    }
}