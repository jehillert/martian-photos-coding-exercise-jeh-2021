# Martian Photos Mini Project

## Description

Component shows photo from NASA's curiosity rover taken on date selected by user. Every time the date is changed, a random photo is selected from all the photos taken by the rover on that date. A live demo of this project can be found [here](https://martian-photos-demo-component.hillert.dev/).

## Development Notes

### Running the Project
Please remove the "example" from the "example.env" file.
Start development environment running

```sh
$ yarn start
# or with npm
$ npm run start
```

### Other Available Commands
| `yarn <script>`       | Description                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `start`               | Serves your app at `localhost:8091`                                                                                     |
| `build:dev`           | Builds the application to ./build (_the build output dir could be configured in `./config/common-paths.js`_)            |
| `build:dev:watch`     | Builds the application and watch for changes                                                                            |
| `build:dev:analyze`   | Builds the application with Bundle Analyzer and Visualizer Plugins installed                                             |
| `build:dev:dashboard` | Builds the application with Dashboard                                                                                   |
| `serve:dev:dashboard` | Builds the application with Dashboard                                                                                   |
| `test`                | Runs unit tests with Jest. See [testing](#testing)                                                                      |
| `test:watch`          | Runs `test` in watch mode to re-run tests when changed                                                                  |
| `lint`                | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`            | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |
