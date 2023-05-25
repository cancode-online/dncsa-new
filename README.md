# Del Norte CSA Website Redone

An easier and simpler way for Mr. Mortensen to interact with his students and for his students to interact with his content during the entire school year for CSA. A better and cleaner version of jupyter notebook documentation.

## Logging in

All one needs to access the content of the website is signing in through Google. With a login, you will be able to access the course material and with submissions of frqs and mcqs, your name will be associated with your work.


## Developing

When cloning the site and developing, one will need to run ` npm install -g pnpm ` in their bash terminal for the project. This will only work with updated versions of npm and nvm/node.js.  
Use ` curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash ` to install the newest version of nvm (Node Version Manager). 
(As of May 2023)  
After installating nvm, run ` nvm install node `.  
After all installations are finished, run ` pnpm i ` in terminal.
To run a local version of the server, run ` pnpm run dev `

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
