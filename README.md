# React x Firebase Workshop

## Table of Contents

* [Basic usage](#basic-usage)
* [Build](#build)
* [Libraries Used](#libraries-used)

## Prerequisites
- A basic understanding of React hooks ([useState](), [useEffect]())

## System Requirements

- [git]()
- [NodeJS]()
- [npm]()

To verify that you have these available in your path, you can run:

```shell
git --version
node --version
npm --version
```

## Basic usage

``` bash
# dev server  with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

## Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## Libraries Used

* 👓   [AntD](https://ant.design/components) - For all our component needs
* ⌚  [dayjs](https://www.npmjs.com/package/dayjs) - Helpers methods for some date utils
* 🔥   [Firebase](https://www.npmjs.com/package/firebase) - Our complete backend-as-a-service implementation
* 📝  [prop-types](https://www.npmjs.com/package/prop-types) - Runtime type checking for React props