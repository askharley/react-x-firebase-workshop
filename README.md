# ⚛️React x 🔥Firebase Workshop

## Table of Contents

* [Prerequisites](#prerequisites)
* [System Requirements](#system-requirements)
* [Setup](#setup)
* [Libraries Used](#libraries-used)

## Prerequisites
- A basic understanding of React hooks ([useState](https://reactjs.org/docs/hooks-state.html), [useEffect](https://reactjs.org/docs/hooks-effect.html))

## System Requirements

- [git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

To verify that you have these available in your path, you can run:

```shell
git --version
node --version
npm --version
```

## Setup the app

```shell
git clone git@github.com:askharley/react-x-firebase-workshop.git
cd react-x-firebase-workshop
cd start
// OR
cd finish
npm i
```

## Environmental Variables

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

## Running the app

To get the app running on your local machine, run:

```shell
npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

## Setting up your Firebase project


## Libraries Used

* 👓   [AntD](https://ant.design/components) - Components
* 🔥   [Firebase](https://www.npmjs.com/package/firebase) - Our complete backend-as-a-service implementation
* ⌚  [dayjs](https://www.npmjs.com/package/dayjs) - Helpers methods for some date utils
* 📝  [prop-types](https://www.npmjs.com/package/prop-types) - Runtime type checking for React props