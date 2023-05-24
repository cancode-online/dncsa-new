# Arrays and Images

> Provided code is to assist in changing Images.

- title: Arrays and Images
- badges: false
- toc: true
- image: /images/monalisa.png
- permalink: /unit/6
- categories: [3.D, C6.2]
- type: ap
- week: 6

## Saving PNG to GIF

Image IO read and Image IO write are focus of this code. A key portion of working with Images, or any file, is to know location of the input and output directories.

```java
import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;
import java.awt.image.BufferedImage;

public class ImageIOTest {

    public static void main( String[] args ){
       BufferedImage img = null;  // buffer type
        try {
            // Name of file and directories
            String name = "MonaLisa";
            String in = "images/";
            String out = "images/tmp/";

            // Either use URL or File for reading image using ImageIO
            File imageFile = new File(in + name + ".png");
            img = ImageIO.read(imageFile);  // set buffer of image data

            // ImageIO Image write to gif in Java
            // Documentation https://docs.oracle.com/javase/tutorial/2d/images/index.html
            ImageIO.write(img, "gif", new File(out + name + ".gif") );  // write buffer to gif

        } catch (IOException e) {
              e.printStackTrace();
        }
        System.out.println("Success");
    }
}
ImageIOTest.main(null);
```

## Image Scaling and ASCII Conversion

In this example we print out a row of text for each row in the image. However, it seems as if the image is too tall. To address this problem, try to output a single character per block of pixels. In particular, average the grayscale values in a rectangular block that’s twice as tall as it is wide, and print out a single character for this block.

```java
import java.awt.Color;
import java.awt.image.BufferedImage;
import java.awt.Image;
import java.awt.Graphics2D;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.imageio.stream.ImageOutputStream;
import javax.imageio.stream.ImageInputStream;
import javax.imageio.metadata.IIOMetadata;
import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.ImageReader;
import javax.imageio.ImageTypeSpecifier;

public class Pics {
    private final String inDir = "images/"; // location of images
    private final String outDir = "images/tmp/";  // location of created files
    private String inFile;
    private String resizedFile;
    private String asciiFile;
    private String ext;   // extension of file
    private long bytes;
    private int width;
    private int height;

    // Constructor obtains attributes of picture
    public Pics(String name, String ext) {
        this.ext = ext;
        this.inFile = this.inDir + name + "." + ext;
        this.resizedFile = this.outDir + name + "." + ext;
        this.asciiFile = this.outDir + name + ".txt";
        this.setStats();
    }


    // An image contains metadata, namely size, width, and height
    public void setStats() {
        BufferedImage img;
        try {
            Path path = Paths.get(this.inFile);
            this.bytes = Files.size(path);
            img = ImageIO.read(new File(this.inFile));
            this.width = img.getWidth();
            this.height = img.getHeight();
        } catch (IOException e) {
        }
    }

    // Console print of data
    public void printStats(String msg) {
        System.out.println(msg + ": " + this.bytes + " " + this.width + "x" + this.height + "  " + this.inFile);
    }

    // Convert scaled image into buffered image
    public static BufferedImage convertToBufferedImage(Image img) {

        // Create a buffered image with transparency
        BufferedImage bi = new BufferedImage(
                img.getWidth(null), img.getHeight(null),
                BufferedImage.TYPE_INT_ARGB);

        // magic?
        Graphics2D graphics2D = bi.createGraphics();
        graphics2D.drawImage(img, 0, 0, null);
        graphics2D.dispose();

        return bi;
    }

    // Scale or reduce to "scale" percentage provided
    public void resize(int scale) {
        BufferedImage img = null;
        Image resizedImg = null;

        int width = (int) (this.width * (scale/100.0) + 0.5);
        int height = (int) (this.height * (scale/100.0) + 0.5);

        try {
            // read an image to BufferedImage for processing
            img = ImageIO.read(new File(this.inFile));  // set buffer of image data
            // create a new BufferedImage for drawing
            resizedImg = img.getScaledInstance(width, height, Image.SCALE_SMOOTH);
        } catch (IOException e) {
            return;
        }

        try {
            ImageIO.write(convertToBufferedImage(resizedImg), this.ext, new File(resizedFile));
        } catch (IOException e) {
            return;
        }

        this.inFile = this.resizedFile;  // use scaled file vs original file in Class
        this.setStats();
    }

    // convert every pixel to an ascii character (ratio does not seem correct)
    public void convertToAscii() {
        BufferedImage img = null;
        PrintWriter asciiPrt = null;
        FileWriter asciiWrt = null;

        try {
            File file = new File(this.asciiFile);
            Files.deleteIfExists(file.toPath());
        } catch (IOException e) {
            System.out.println("Delete File error: " + e);
        }

        try {
            asciiPrt = new PrintWriter(asciiWrt = new FileWriter(this.asciiFile, true));
        } catch (IOException e) {
            System.out.println("ASCII out file create error: " + e);
        }

        try {
            img = ImageIO.read(new File(this.inFile));
        } catch (IOException e) {
        }

        for (int i = 0; i < img.getHeight(); i++) {
            for (int j = 0; j < img.getWidth(); j++) {
                Color col = new Color(img.getRGB(j, i));
                double pixVal = (((col.getRed() * 0.30) + (col.getBlue() * 0.59) + (col
                        .getGreen() * 0.11)));
                try {
                    asciiPrt.print(asciiChar(pixVal));
                    asciiPrt.flush();
                    asciiWrt.flush();
                } catch (Exception ex) {
                }
            }
            try {
                asciiPrt.println("");
                asciiPrt.flush();
                asciiWrt.flush();
            } catch (Exception ex) {
            }
        }
    }

    // conversion table, there may be better out there ie https://www.billmongan.com/Ursinus-CS173-Fall2020/Labs/ASCIIArt
    public String asciiChar(double g) {
        String str = " ";
        if (g >= 240) {
            str = " ";
        } else if (g >= 210) {
            str = ".";
        } else if (g >= 190) {
            str = "*";
        } else if (g >= 170) {
            str = "+";
        } else if (g >= 120) {
            str = "^";
        } else if (g >= 110) {
            str = "&";
        } else if (g >= 80) {
            str = "8";
        } else if (g >= 60) {
            str = "#";
        } else {
            str = "@";
        }
        return str;
    }

    // tester/driver
    public static void main(String[] args) throws IOException {
        Pics monaLisa = new Pics("MonaLisa", "png");
        monaLisa.printStats("Original");
        monaLisa.resize(33);
        monaLisa.printStats("Scaled");
        monaLisa.convertToAscii();

        Pics pumpkin = new Pics("pumpkin", "png");
        pumpkin.printStats("Original");
        pumpkin.resize(33);
        pumpkin.printStats("Scaled");
        pumpkin.convertToAscii();
    }
}
Pics.main(null);
```

# Hacks

> Continue to work with Classes, Arrays, and 2D arrays. FYI, you may need to make a directory /tmp under notebook images.

1. Look at comments above and see if there is better conversions for ASCII to reduce elongation and distortion.
2. Try to convert images into Grey Scale, Red Scale, Blue Scale, and Green Scale.

[Additional Image Code](https://github.com/nighthawkcoders/nighthawk_csa/tree/master/src/main/java/com/nighthawk/csa/starters/image)

[Runtime using Thymeleaf](https://csa.nighthawkcodingsociety.com/starters/image)
