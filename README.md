# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Very important message for running this application:

Please note the folloing steps
1. While uploading the entire node_modules folder to GitHub is generally discouraged. However, it's crucial to approach it with caution and understanding.

Here's a breakdown of the options:

Option 1: Ignore node_modules with .gitignore (recommended) => is used 

This is the preferred approach for most cases. Adding node_modules/ to your .gitignore file instructs Git to ignore changes within the folder, keeping your repository size manageable and clone times faster. Collaborators can then install dependencies themselves using npm install.

So just use `npm install` before the commands given below 

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### To mock json data json-server package has been used 

Mock server can be started on port 8000 by running below command: 
`npx json-server --watch data/db.json --port 8000`

To access json data we can make an api call on the below given url:
[http://localhost:8000/restaurant]

mock json data is stored in data/db.json(i.e. the original file restaurantData.json has been renamed db.json)
