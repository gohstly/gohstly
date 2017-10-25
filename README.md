# Gohstly
### By Garrett Moore, Josiah Jodelat, Joseph Tran

![GohstlyMiddle](/client/src/images/GohstlyMiddle.png)

## Deployed Here: https://gohstly.herokuapp.com/

# Inspiration
Imagine you just got a new video game. You go home, pop it in the system, and play for a few hours.

You are so excited about your new game that you want to tell your gaming friends all about it. You login to FaceBook to post a status about the game when suddenly you stop mid-typing and think to yourself, "Wait, this doesn't feel quite right. Do I really want to post on FaceBook where most of my connections don't even play video games?".

As fellow video gamers, we have encountered a similar scenario one too many times. The video gaming community is lacking a social network platform where gamers can actively engage with other gamers.

To solve this dilemma, we decided to take matters into our own hands and create Gohstly, a social networking platform for video gamers.

# Application
Gohstly is a social networking platform for video gamers built with ReactJs. With Gohstly, gamers have the ability to create their own personalized gaming profiles by utilizing Steam and Twitch API's. 

A user's profile will show the games they own, who they are friends with on steam, and their Twitch videos. Users can create groups, post statues related to gaming, and connect with others in the video gaming community.

# Built With

Gohstly is built using JavaScript, React, node.js, Express, and Material-UI. Gohstly uses the Twitch and Steam API's to generate user profile information upon signup. The application is currently deployed to Heroku and is backed by a remote MongoDB Database with Mongoose.

Node Packages Used: express, react, axios, mongoose, material-ui, material-ui-icons, material-design-icons, body-parser, react-router-dom

# Getting Started

## Installation

### Step 1: Create React Express App

#### About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

### Step 2: Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..

```

After both installations complete, run the following command in your terminal:

```
yarn start

```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build

```

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!

# API's

## Twitch

Included Twitch API calls to get user data and info and display user channel streams using channel ID 
and displaying within an iframe for ease of viewing.

1. Visit this link to learn more about the Twitch API:
    1. https://dev.twitch.tv/api

## Steam

Used axios package to call the Steam api and push/pull data from MongoDB Database and display user information as
well as user "friend's" information including username, profile image, number of hours played, location, and Steam URL.

1. Visit this link to learn more about the Steam API:
    1. https://developer.valvesoftware.com/wiki/Steam_Web_API

# Using Gohstly

## Step 1 - New User
1. Click "SignUp" to begin or "Login" if you are a returning user.
2. Fill out the form with your information.
3. Make sure that your SteamId and TwitchName are accurate as this is crucial in creating your profile.
4. Submit form.

## Step 2 - User Page
1. After submitting the form, the user will be re-directed to their user page.
2. Here, a user will have 4 tabs to choose from:
    1. Overview: The user's steam profile information that includes username, profile image, location, and Steam URL.
    2. Games: List of games that the user owns on steam.
    3. Friends: List of Steam Friends and friend information including username, profile images, location, and Steam URL.
    4. Activities: List of Twitch Videos, recent in game accomplishments, posts, and friends posts.

## Step 3 - Feed
1. By clicking the "Feed" tab in the menu, a user can post about their most recent gaming experiences.
2. To do so, fill out the form and click "Submit Post".

## License
MIT License

Copyright (c) [2017] [Gohstly]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## End
Thank you for using Gohstly! Please contact me directly if you have any questions or suggestions.

https://github.com/garrettmmoore
