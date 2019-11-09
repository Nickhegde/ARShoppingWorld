This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Title
Shopping World

## About
It is an Augmented Reality(AR) based dress trial tool based on the placement of marker(Hiro). Basically a person has to select a dress and place a marker in front of the camera, and the dress appears on the marker. The marker can be placed on the person or table or anywhere the user prefers in front of the camera. The tool can be used to build a  shopping site or a AR based trial room. It is the future of shopping where a person need not waste time in changing clothes and also in waiting for trial rooms to be free.

## Prerequisites
Environment pre-requisites:

* Nodejs 8.x.x
* NPM 6.4.x
* aframe.min.js
* three.ar.js
* aframe-ar.js

## Getting Started

Following instuctions are to setup and run the project on local machine for development.

### Steps to setup the configuration and start the application:

1) Clone the repository, go inside the cloned directory.

2) Run the below command to install the dependencies required for the application:

  `npm install`

  ## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

You may serve it with a static server:

### `npm install -g serve`

###  `serve -s build`

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `node server.js`

Open [http://localhost:7000](http://localhost:7000) to view it in the browser (only if you have installed nodejs).


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Functionality

### Login / Register

The registration process is handled using [Firebase](https://firebase.google.com).
Firebase provides a full set of authentication options out-of-the-box. Firebase automatically stores your users’ credentials securely (using bcrypt) and redundantly (with replication and daily off-site backups). This separates sensitive user credentials from your application data, and lets you focus on the user interface and experience for your app.

![Register](Images/register.png?raw=true "Register Page")

The user has to fill his details in the registration form and submit it.

![Login](Images/login.png?raw=true "Login Page")

The user can login using registered credentials. Error messages are displayed if user enters wrong email or password.

### Home

On successfull login, the user will land into Home page.

![Home](Images/home.png?raw=true "Home Page")

The user can select Men, Women or Kids section anything that is preferred.

### Men

On selecting Men, the user will land to Men's section.

![Men](Images/shopMen.png?raw=true "Men's section Page")

Here, the user can select any shirt he wishes to try on and click it, which lands the user on trial page.

###Trial page

On selecting the dress the user will land into this page.

The browser will ask user permission to open Camera and user has to allow it.

Then the following screen appears,

![Blank](Images/plainScreen.png?raw=true "Blank screen")

Where the user will see three buttons, `Back`, `+` and `-`.
`Back` button navigates to previous page.

Now, if the user keeps the `hiro` marker infront of the camera the 3D-object appears on the screen which can be rotated using marker movements also the size of the 3d object (dress) can be increased or decreased by clicking on `+` and `-` accordingly.

The marker can be downloaded [here](https://upload.wikimedia.org/wikipedia/commons/4/48/Hiro_marker_ARjs.png)

![Marker](Images/hiro.png?raw=true "Hiro marker")

After placing marker the 3D-model looks lik this,

![3D-model](Images/ar.png?raw=true "Shirt model")

The printout of marker can be placed on the user's body and the shirt will appear on the user as if he is wearing it, thus providing the trial room like experience.


## Important Note

The project is still not completed, hence the following features are still in progress,
1. Facebook login.
2. Women and Kid's section.

Other than these major features there might be some minor bugs or issues which will be resolved in future as the development proceed. 

## Acknowledgements

[https://github.com/prashant-andani/AR-Alphabets](https://github.com/prashant-andani/AR-Alphabets)

[https://aframe.io/docs/0.9.0/introduction/](https://aframe.io/docs/0.9.0/introduction/)

[https://menubar.io/firebase-facebook-login-react](https://menubar.io/firebase-facebook-login-react)




