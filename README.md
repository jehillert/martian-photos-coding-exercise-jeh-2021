# Martian Photos Mini Project
![Screen-2023-08-15-135526](https://github.com/jehillert/pointless-pictures-of-mars/assets/25601296/b4deaf4f-bb1f-4e0d-a033-c9762ebf5844)

## Description

Component shows photo from NASA's curiosity rover taken on date selected by user. Every time the date is changed, a random photo is selected from all the photos taken by the rover on that date. A live demo of this project can be found [here]([https://martian-photos-demo-component.hillert.dev/](https://pointless-pictures-of-mars.hillert.dev/)).

## Development Notes

### Running the Project
Please remove the "example" from the "example.env" file.
Start development environment running

```sh
$ yarn start
# or
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
