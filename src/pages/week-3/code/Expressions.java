class Main {
    public static void main(String[] args) {
        // All of the boolean expressions below evaluate to true

        if (true) {
            System.out.println("True code block");
        }

        if (true && !false) {
            System.out.println("True and Not False code block");
        }

        if (true || false) {
            System.out.println("True or False code block");
        }

        if ((true && !false) && (true || false)) {
            System.out.println("Confusing code block");
        }

        if (!((false || !true) || (false && true))) {
            System.out.println("De Morgan's law in my head of confusing code block");
        }

        // Can any of the above expression be simplified?  What would they simplify to?  Are any of these expressions useful?
    }
}