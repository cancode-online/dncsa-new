# Fastpages Darkmode
> An implementation of the darkmode for GitHub Fastpages.

- toc: true
- branch: master
- badges: true
- comments: true
- author: Vunsh Mehta
- image: /images/fastpages_dark.png
- type: pbl
- week: 1

### Hey bloggers!
If you are on this page, chances are you are interested in implementing **dark mode** into your website. What you see now is an example of Dark Mode being used on a Github fastpages build. It is a very simple addition that can help personalize your site.

[Original Blog Post](https://thinking-slow.eth.limo/colours/jekyll/css/fastpages/2020/10/30/hello-dark-mode.html)


#### Guide
- Navigate to the style directory in your code editor. This is by default stored in **_sass/minima**. [Example minima folder](https://github.com/nighthawkcoders/APCSA/blob/master/_sass/minima)
- Create a file in this directory for your dark mode styling. Name it whatever you want, but for this guide I named it **dark-mode.scss**. Make sure you use the scss file suffix! [Example dark mode file](https://github.com/nighthawkcoders/APCSA/blob/master/_sass/minima/dark-mode.scss)
- If you would like to use the default dark mode template, copy the code from [this file](https://github.com/nighthawkcoders/APCSA/blob/master/_sass/minima/dark-mode.scss) and paste it into your dark mode file.
- Navigate to the custom styles file in your text editor folder. By default, it is named **custom-styles.scss** [Example Custom Styles File](https://github.com/nighthawkcoders/APCSA/blob/master/_sass/minima/custom-styles.scss)
- Under the comment, import your dark mode file. [Example import statement](https://github.com/nighthawkcoders/APCSA/blob/master/_sass/minima/custom-styles.scss)

```/*-----------------------------------*/

/*----- ADD YOUR STYLES BELOW -------*/

@import "minima/dark-mode";```

#### Links
Credit to this blog post [here](https://thinking-slow.eth.limo/colours/jekyll/css/fastpages/2020/10/30/hello-dark-mode.html) for the information.

Example [repository](https://github.com/vunsh/blogging) that has dark mode implemented

#### Further your Knowledge
Dark mode is cool and all, but why not take it a step further? See if you can figure out how to toggle the import statement on and off to make a toggleable theme set. Try editing the dark mode file to mess around with the shades/colors of your dark mode settings to make it as personalized as you can. Be creative and innovative!



