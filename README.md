# FriendFinder

This match making application will help you find the long lost friend you didn't know you were missing. Provide your name and a link to a photo for your new friend and we can get started! In ten carefully selected statements, you'll provide an answer based on a scale of 1-5; 1 being strongly disagree, 5 being strongly agree. It will then display the best match for you based on your responses. The app uses user authentification, Express.js, Node.js, and RESTful API routes.

### Demo: https://glacial-forest-19610.herokuapp.com/

![screenshot of app](https://github.com/morganstyers/FriendFinder/blob/master/images/Screen%20Shot%202020-03-12%20at%201.20.34%20PM.png)
![screenshot of app](https://github.com/morganstyers/FriendFinder/blob/master/images/Screen%20Shot%202020-03-12%20at%201.20.15%20PM.png)
![screenshot of app](https://github.com/morganstyers/FriendFinder/blob/master/images/Screen%20Shot%202020-03-12%20at%201.19.58%20PM.png)

Installing
To run the app locally, you will first need to git clone the repository to your local machine.

HTTPS:

$ git clone https://github.com/morganstyers/FriendFinder.git
SSH:

$ git clone git@github.com:morganstyers/FriendFinder.git
Once cloned, cd into the repository and install the necessary dependencies by running:

$ npm install
You can then start the app locally by running:

$ node server.js
Built With
Express.js - Node.js framework
jQuery - Front-end framework
Node.js - JavaScript runtime
npm - Dependency management
Bootstrap - CSS framework
Authors
See contribution history here

Future Updates
At the moment, the app will check your survey results against a seed file with results from various fake "friends." In the future, I would like to add in a database in order to have users match against one another instead of the seed file.
