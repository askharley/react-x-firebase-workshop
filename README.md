# ⚛️React x 🔥Firebase Workshop

> A workshop to explain how to go about integrating Firebase into your React application. We'll be implementing Authentication, Firestore, Remote Config, Cloud Functions and Hosting.

## Table of Contents
* [🎯 Goals](#goals)
* [⚡ Get Started](#get-started)
* [📚 Projects](#projects)
* [🤖 Deployments](#deployments)
* [🚀 Libraries Used](#libraries-used)

## 🎯 Goals

- Learn how we can use Firebase Authentication to manage our users
- Learn how we can use Firebase Cloud Firestore to store data and receive it in real time
- Learn how we can use Firebase Remote Config to receive configuration variables from the cloud

## ⚡ Get Started

### Clone Repo
```
# clone the repo
$ git clone git@github.com:askharley/react-x-firebase-workshop.git

# navigate into the repo root
$ cd react-x-firebase-workshop

# go into the start project
$ cd start
```

### Environmental Variables

Add your Firebase project's web config to a `.env` file in the root of the application.

```js
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_DATABASE_URL=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=
```

### Install
```
# install the dependencies
$ npm i

# start the application
$ npm start
```

## 📚 Projects

* [start](https://github.com/askharley/react-x-firebase-workshop/tree/main/start) - a starting place to begin your work
* [final](https://github.com/askharley/react-x-firebase-workshop/tree/main/final) - an example of what a final implementation using Firebase would look like

## 🤖 Deployments

* [start](https://react-x-firebase-workshop-start.netlify.app/) - [![Netlify Status](https://api.netlify.com/api/v1/badges/71a180da-fc6f-414d-8cb8-201cb7d9e161/deploy-status)](https://app.netlify.com/sites/react-x-firebase-workshop-start/deploys)
* [final](https://react-x-firebase-workshop-final.netlify.app/) - [![Netlify Status](https://api.netlify.com/api/v1/badges/71a180da-fc6f-414d-8cb8-201cb7d9e161/deploy-status)](https://app.netlify.com/sites/react-x-firebase-workshop-final/deploys)


## 🚀 Libraries Used

* [AntD](https://ant.design/components) - Components
* [Firebase](https://www.npmjs.com/package/firebase) - Our complete backend-as-a-service implementation
* [dayjs](https://www.npmjs.com/package/dayjs) - Helpers methods for some date utils
* [prop-types](https://www.npmjs.com/package/prop-types) - Runtime type checking for React props
* [use-ekko](https://github.com/askharley/use-ekko) - Persist state to the local storage
