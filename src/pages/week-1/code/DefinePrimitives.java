class DefinePrimitives {
    public static void main(String[] args) {
        int anInt = 100;
        double aDouble = 89.9;
        boolean aBoolean = true;
  
        // not primitives but essential
        String aString = "Hello, World!";   // wrapper class shortcut assignment
        String aStringFormal = new String("Greetings, World!");
    
        System.out.println("anInt: " + anInt);
        System.out.println("aDouble: " + aDouble);
        System.out.println("aBoolean: " + aBoolean);
        System.out.println("aString: " + aString);
        System.out.println("aStringFormal: " + aStringFormal);
    }
}

// Judge0 Activation (pretend it's not here)
class Main {
    public static void main(String[] args) {
        DefinePrimitives.main(null);
    }
}