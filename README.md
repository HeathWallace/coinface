![Logo](./public/favicon.ico)

# Ethereum POS
> Accept ERC-20 token payments in-store.

Allows shops to accept ERC-20 compliant cryptocurrency payments.

[![CircleCI](https://circleci.com/gh/HeathWallace/ethereum-pos.svg?style=shield&circle-token=4090d7f93c1bd552f529296e4cf5503cb22e44ed)](https://circleci.com/gh/HeathWallace/ethereum-pos)

## Installing / Getting started

A quick introduction of the minimal setup you need to get the app up & running.

```shell
git clone git@github.com:HeathWallace/ethereum-pos.git
cd ethereum-pos
npm install
npm start
```

Create a file `.env` in the root of the app and add the variables shown in the console.

Please follow [this guide to the fork+PR workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962). Pull requests are pre-populated with the project's PR template.

## Developing

### Built With

React / Redux / Redux-thunk / Storybook / Ethplorer

### Prerequisites

- [Node](https://nodejs.org)

### Deploying / Publishing

To deploy the app, build the app using the included build script (`npm run build`) and place the output of the `/build` directory in a publicly accessible folder.

The master branch of this repository is connected to Heroku with the [create-react-app-buildpack](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack) to automate the above process.

## Configuration

Environment variables are listed in `/src/environment` and checked automatically at startup.

## Tests

Unit tests are included for components/reducers/actions etc.

```shell
npm test
```
Linting is also implemented.

```shell
npm run lint
```

## Style guide

ESLint is used to check code style; see Tests above.

## Licensing

See [LICENSE.md](blob/master/LICENSE.md).

## Authors

Maintained by [@dan1elhughes](https://github.com/dan1elhughes) and [@ShaunBulbrook](https://github.com/ShaunBulbrook).

See the list of [contributors](https://github.com/heathwallace/ethereum-pos/contributors) who participated in this project.
