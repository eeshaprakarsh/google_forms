# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Deploying the project to GitHub Pages

### Install the gh-pages npm package

$ npm install gh-pages --save-dev

At this point, the gh-pages npm package is installed on your computer and the React app's dependence upon it is documented in the React app's package.json file.

### Add a homepage property to the package.json file

1. Open the package.json file in a text editor.

    $ vi package.json
    In this tutorial, the text editor I'll be using is vi. You can use any text editor you want; for example, Visual Studio Code.

2. Add a homepage property in this format*: https://{username}.github.io/{repo-name}

    * For a project site, that's the format. For a user site, the format is: https://{username}.github.io. You can read more about the homepage property in     the "GitHub Pages" section of the create-react-app documentation.

    {
      "name": "my-app",
      "version": "0.1.0",
    + "homepage": "https://gitname.github.io/react-gh-pages",
      "private": true,
      
    At this point, the React app's package.json file includes a property named homepage.
    
### Add deployment scripts to the package.json file
  
1. Add a "remote" to the local Git repository.

   You can do that by issuing a command in this format:

   $ git remote add origin https://github.com/{username}/{repo-name}.git
   
    To customize that command for your situation, replace {username} with your GitHub username and replace {repo-name} with the name of the GitHub      repository you created in Step 1.

    In my case, I'll run:

    $ git remote add origin https://github.com/gitname/react-gh-pages.git
    
  That command tells Git where I want it to push things whenever I—or the gh-pages npm package acting on my behalf—issue the $ git push command from within   this local Git repository.

  At this point, the local repository has a "remote" whose URL points to the GitHub repository you created in Step 1.
  
### Deploy the React app to GitHub Pages

1. Deploy the React app to GitHub Pages

    $ npm run deploy
    
    That will cause the predeploy and deploy scripts defined in package.json to run.

    Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script     will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already  exist.

    By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

    $ npm run deploy -- -m "Deploy React app to GitHub Pages"
    
    GitHub Pages will automatically detect that a new commit has been added to the gh-pages branch of the GitHub repository. Once it detects that, it will  begin serving the files that make up that commit — in this case, the distributable version of the React app — to anyone that visits the homepage URL you specified in Step 4.

    That's it! The React app has been deployed to GitHub Pages! 🚀

    At this point, the React app is accessible to anyone who visits the homepage URL you specified in Step 4. For example, the React app I deployed is accessible at https://gitname.github.io/react-gh-pages.
