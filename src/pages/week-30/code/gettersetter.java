class Letter {
    private String sender;
    private String recipient;
    private String message;

    public Letter(String sender, String recipient, String message) {
        this.sender = sender;
        this.recipient = recipient;
        this.message = message;
    }

    public String getSender() {
        return this.sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getRecipient() {
        return this.recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void send() {
        System.out.println("Sending letter from " + this.sender + " to " + this.recipient);
        System.out.println("Message: " + this.message);
    }
}

class Main {
    public static void main(String[] args) {
        Letter letter = new Letter("John", "Jane", "Hello Jane, how are you?");
        System.out.println("Sender: " + letter.getSender());
        System.out.println("Recipient: " + letter.getRecipient());
        System.out.println("Message: " + letter.getMessage());

        letter.setSender("Jack");
        letter.setRecipient("Jill");
        letter.setMessage("Hi Jill, how's it going?");

        System.out.println("Sender: " + letter.getSender());
        System.out.println("Recipient: " + letter.getRecipient());
        System.out.println("Message: " + letter.getMessage());

        letter.send();
    }
}
