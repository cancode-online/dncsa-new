import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.io.Writer;

public class JupyterToMd {

    private File reading;
    private File writing;

    private String title;
    private String date;
    private String summary;

    public JupyterToMd(File reading) {
        this.reading = reading;

        // Removes the date from the title of the files
        int index = reading.getName().lastIndexOf("-") + 1;
        this.writing = new File(reading.getName().substring(index));
    }

    public void addTitle(String title) {
        this.title = title;
    }

    public void addDate(String date) {
        this.date = date;
    }

    public void addSummary(String summary) {
        this.summary = summary;
    }

    private String makeHeader() {
        String header = 
        "--- \n" +
        "title: " + this.title + "\n" +
        "date: '" + this.date + "'\n" +
        "summary: \"" + this.summary + "\" \n" +
        "tags: [] \n" +
        "type: 'pages' \n" +
        "---";

        return header;
    }
    
    private String getExtension(String line) {
        
        String ext;

        switch (line.substring(2)) {
            case "java":
                ext = ".java";
                break;
            case "py":
            case "python":
                ext = ".py";
                break;
            case "js":
            case "javascript":
                ext = ".js";
                break;
            default:
                ext = "error";
                System.out.println("error: " + line);
        }

        return ext;
    }

    private void writeFile() {
        String header = makeHeader();

        try {
            Writer writer = new FileWriter(this.writing);
            Reader reader = new FileReader(this.reading);
            BufferedReader br = new BufferedReader(reader);
            BufferedWriter mainWriter = new BufferedWriter(writer);

            String readingLine = br.readLine();
            int numFiles = 0;

            while (readingLine != null) {

                // if it finds a code segment
                if (readingLine.contains("```")) {
                    
                    // instantiate new file
                    numFiles++;
                    String ext = getExtension(readingLine);
                    int extIndex = reading.getName().lastIndexOf(".");
                    File newCodeFile = new File(this.reading.getName().substring(0, extIndex) + "-file-" + numFiles + ext);
                    BufferedWriter codeWriter = new BufferedWriter(new FileWriter(newCodeFile));

                    readingLine = br.readLine();

                    // keep writing until it finds the end of the segment
                    while (readingLine != "```") {
                        codeWriter.write(readingLine);
                        readingLine = br.readLine();
                    }

                    // adds it to the header

                    // writes runnable into the old space
                    mainWriter.write("");

                }


            }



        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static void main(String[] args) {
        File file = new File("/weekTemp/week-6/2022-09-26-AP-image_io.md");
        JupyterToMd obj = new JupyterToMd(file);
        System.out.print("test");
        System.out.print(obj.makeHeader());
    }

}