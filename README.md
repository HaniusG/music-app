# About the project 

This is a music player web application with a music list, allowing users to select tracks from a local folder or upload their own. The controls include options to go to the previous or next track, adjust the volume, use the progress bar for rewinding, and play or stop the music. The track list displays indicators for each action.

Users can upload audio files, which are stored in the global state and can be played with dynamically generated sources.

# What have I used

Redux and Redux toolkit
PredProcessor SCSS
Icons as components
Custom fonts
React router dom
Typescript

# Components and Structure

The main component is the App component, which uses BrowserRouter for potential future add-ons. The only page is the Main Page.

SubHeader:
This section contains components like AddAllButton and PlayAllButton, which log to the console as specified in the task. Additionally, there is a Search component with a functional search filter based on the screenshots.

SongList:
The SongList is a collection of SongRow components rendered from the Redux global state. Users can play, stop, and select music, and clicking on a track opens the MusicPlayer component.

MusicPlayer: 
Though not initially specified in the task, the MusicPlayer component was added for enhanced functionality. Users can change the volume, play, stop, go to the previous or next track, and more.

UploadBtn: 
The UploadBtn opens a modal for uploading new music.

Modal:
When the modal is open, it blocks interactions until closed or until music is successfully uploaded. The MusicUploader component is nested inside the children props.

# Data

As there is no database, Redux is used for state management. The global state includes an array of songs, with reducers and additional states for various functionalities.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
