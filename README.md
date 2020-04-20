# [TurtleWolfe/DockerReact](https://github.com/TurtleWolf/DockerReact)

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

then modified according to the first few chapters of the React Cook Book

[![React Cook Book cover](https://raw.githubusercontent.com/TurtleWolf/react_scaffolding/master/ReactCookBook.png 'React Cook Book By Carlos Santana Roldán August 2018')](https://subscription.packtpub.com/book/web-development/9781783980727 'By Carlos Santana Roldán August 2018c')
[![React Tooling cover](/ReferenceNotes/Images/ReactTooling.png 'React 16 Tooling covers the most important tools, utilities, and libraries that every React developer needs to know — in detail. By Adam Boduch, April 2018')](https://subscription.packtpub.com/book/web_development/9781788835015 'By Carlos Santana Roldán August 2018c')

[![Docker Swarm](/ReferenceNotes//Images/Docker_Swarm.png 'Build, test, deploy containers with the best mega-course on Docker, Kubernetes, Compose, Swarm and Registry using DevOps ')](https://www.udemy.com/course/docker-mastery 'By Carlos Santana Roldán August 2018c')
[![Docker Node](/ReferenceNotes//Images/DockerNode.png 'Build, test, deploy Node for Docker, Kubernetes, Swarm, and ARM with the latest DevOps practices from a container expert ')](https://www.udemy.com/course/docker-mastery-for-nodejs 'By Carlos Santana Roldán August 2018c')

## [Running React and Node.js in one shot with Docker! ](https://dev.to/numtostr/running-react-and-node-js-in-one-shot-with-docker-3o09 'In this post looking at the docker way of running React and Node.js. This is a kind of advance development setup and I hope you already installed and know the basics of docker and docker-compose. If you want to know more about docker head over to docker.com')

& this Medium article Creating a chat web app using Express.js, React.js & Socket.i0
[![Creating a chat web app using Express.js, React.js & Socket.io](/ReferenceNotes/Images/antonio-article.png 'Creating a chat web app using Express.js, React.js & Socket.i')](https://medium.com/signature-networks/creating-a-chat-web-app-using-express-js-react-js-socket-io-1b01100a8ea5 'Antonio Erdeljac')

& maybe this video  
[![Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js](/ReferenceNotes/Images/mastery-video.png 'Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js')](https://youtu.be/ZwFA3YMfkoc ' JavaScript Mastery')

## [ChatSocketIO Draggable Dice DockerFile React AWS](http://ec2-52-87-220-90.compute-1.amazonaws.com/ 'Chattain Ship & Crew')

[![Build and Deploy a Realtime Chat Application - Socket.io, Node.js, and React.js](/ReferenceNotes/Images/mastery-video.png 'Chattain Ship & Crew')](http://ec2-52-87-220-90.compute-1.amazonaws.com ' TurtleWolfe.com')

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/code-splitting "Google's Homepage")

### Analyzing the Bundle Size

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size "Google's Homepage")

### Making a Progressive Web App

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app "Google's Homepage")

### Advanced Configuration

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/advanced-configuration "Google's Homepage")

### Deployment

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/deployment "Google's Homepage")

### `npm run build` fails to minify

This section has moved here: [I'm an inline-style link with title](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify "Google's Homepage")

```bash
sudo apt install nodejs
npm install -g create-react-app@3.0.1
npx create-react-app ./
npm start
```

```bash
sudo apt purge nodejs
sudo apt remove nodejs
sudo npm uninstall -g create-react-app
docker run -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 3000:3000 --rm react_scaffolding:dev
# docker build -t
# docker build -t turtlewolfe/docker_react:prod --target prod . && docker run turtlewolfe/docker_react:prod
# docker-compose build --no-cache
# DOCKER_BUILDKIT=1 docker-compose build --no-cache
# docker inspect --format='{{json .Config}}' socialdev_coursebt_mern_auth_1 | jq

# docker run -p 80:3000 api:prod
# docker run -it -p 80:3000 api:prod bash

# docker build -t api:dev .
# WORKDIR /node
# ENTRYPOINT [ "../node_modules/nodemon/bin/nodemon.js", "--"]
# docker run -p 80:3000 api:dev
# docker exec -it apiDEV /bin/bash
#    docker start apiDEV
#    docker exec -it apiDEV bash
#    docker stop apiDEV

# docker build -t api:dev .
 2000  npx create-react-app docker-react
 2003  cd docker-react
 2005  npm start
```
