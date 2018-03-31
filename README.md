![Logo](./public/favicon.ico)

# Coinface
> Accept ERC-20 token payments in-store.

Allows shops to accept ERC-20 compliant cryptocurrency payments.

[![CircleCI](https://circleci.com/gh/HeathWallace/coinface.svg?style=shield&circle-token=4090d7f93c1bd552f529296e4cf5503cb22e44ed)](https://circleci.com/gh/HeathWallace/coinface)

## Installing / Getting started

A quick introduction of the minimal setup you need to get the app up & running.

```shell
git clone git@github.com:HeathWallace/coinface.git
cd coinface
npm install
npm start
```

Create a file `.env` in the root of the app and add the variables shown in the console.

Please follow [this guide to the fork+PR workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962). Pull requests are pre-populated with the project's PR template.

## Developing

All components should be developed in isolation through Storybook. 

Each component should be grouped into its own folder along with the necessary styling for that component. Create a file `{component}.story.js` alongside the component you have created to define stories for the component. 

To run the Storybook development server execute the following command:

```shell
npm run storybook
```

This will open a new browser window in which you can view all components for which stories have been created.

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

To run all tests (including unit tests on components/actions/reducers, and linting) run the base `test` task.

```shell
npm test
```
It's also possible to just run a linting task for both `eslint` and `stylelint` tasks.

```shell
npm run lint
```

## Style guide

Prettier & ESLint are used to control code style. For Atom, using [prettier-atom](https://atom.io/packages/prettier-atom) with "Automatically format on save" and "ESLint integration" enabled is recommended.

If you prefer not to auto-format on save, `npm run format` is available.

## Licensing

See [LICENSE.md](blob/master/LICENSE.md).

## Authors

Maintained by [@dan1elhughes](https://github.com/dan1elhughes) and [@ShaunBulbrook](https://github.com/ShaunBulbrook).

See the list of [contributors](https://github.com/heathwallace/coinface/contributors) who participated in this project.
