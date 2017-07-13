# Progress Bar Demo
### Progress bar demo for Gorilla Logic test build with React.

Based on the following requirements:
- You product owner sent you an email Monday morning asking you to build a demo of a new progress indicator feature. She attached an image describing the feature to the email (also attached to this question) and asked you to have it ready for a demo with the executive team that afternoon. Unfortunately, the product owner will be out of touch until the meeting, so you'll have to work with the requirements she provided in the attachment.
- Please create a web page that demonstrates the progress indicator feature and paste a publicly accessible URL that demonstrates that feature into the answer box. Also, list the questions that you would have asked the product manager had she been available prior to the demo and describe any decisions you had to make to finish the demo.
- And Following screenshot:

![Screenshot](/gorillalogic.hirevue.png)

- This project was created using a boilerplate based on the following git repository

https://github.com/workco/marvin

### Screenshots from project deployed

The project demo was released on a heroku server with the following url:


https://secure-oasis-72799.herokuapp.com/

### Target Reached
![Screenshot](/target-reached-screenshot.png)
### When the target is not reached
![Screenshot](/marvin.png)

## How to use

#### Configurable Props

- completed(Number/Required): Numeric value defining the completed value
- target(number/Required): Define the target value to reach.
- color(String): Define the color for progress bar
- symbol(String): Symbol to display before the completed and target value. Default: '$'
- animation(number): Timing of animation defined in milliseconds

```
 <Progress completed={ 56 } target={ 125 } color='linear-gradient(to bottom, #6bc061 0%,#60ac58 100%)' animation={ 1000 } symbol='$' />
```

## Table of contents
* [Steps to create progress bar](#user-content-steps-to-create-progress-bar)
* [Features of Progress Bar Component](#user-content-features-of-progress-bar-component)
* [How to use](#user-content-how-to-use)
* [Setup](#user-content-setup)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Build (production)](#user-content-build-production)
* [Running in preview production mode](#user-content-running-in-preview-production-mode)
* [Linting](#user-content-linting)



## Steps to create progress bar?

- Clone repository
- Create stylesheet specific for component `scss/components/progress-bar`
- Create react component under `components/Progress` directory
- Define the props to customize the component.
- Adding base styles to component and page
- Creating the routes to display the home page.
- Deploying to Heroku server.



## Features of Progress Bar Component

- [x] Reusable Component
- [x] Custom Color.  `Default: #0BD318`
- [x] Custom animation timing using milliseconds. `Default: 500 ms`
- [x] Custom symbol to be displayed in component. `Default: $`
- [x] Required target and complete props values (meaning the current value and the target value to be reached)
- [x] Validation of existence complete prop and validation of numeric value
- [x] Validation of target is lower than complete property to avoid in propTypes 
- [x] Adding success visual state when the progress bar reach the 100% of the target, and displaying the message properly.
- [x] Animation of the progress bar when page loads.
- [x] Use of the provided colors in the screenshot.
- [x] Boilerplate contains Linting and last version of webpack.
- [x] Use of component icon helper to display icons in component

## Setup

Tested with node 6.x and 7.x

```
$ npm install
```

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ npm run dev
```

**Note for Windows users:** webpack dashboard still have issues with Windows, so use `npm start` until those are resolved.

![Running in the iTerm2](http://i.imgur.com/3oKTWrv.png)

**OS X Terminal.app users:** Make sure that **View → Allow Mouse Reporting** is enabled, otherwise scrolling through logs and modules won't work. If your version of Terminal.app doesn't have this feature, you may want to check out an alternative such as [iTerm2](https://www.iterm2.com/).

## Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```

If your app is not running on the server root you should change `publicPath` at two places.

In `webpack.config.js` (ATM line 147):

```
output: {
  path: buildPath,
  publicPath: '/your-app/',
  filename: 'app-[hash].js',
},
```

and in `source/js/routes` (ATM line 9):

```
const publicPath = '/your-app/';
```

Don't forget the trailing slash (`/`). In development visit `http://localhost:3000/your-app/`.

## Running in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run preview
```

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```

## Components

### SVG icons - `Icon`

Add SVG icons to `source/assets/icons` folder, and they will automatically be added to SVG sprite.

**Usage:**

```
import Icon from 'components/Global/Icon';

<Icon glyph='triangle' />
```

**Available props**

```
glyph       // required, name of the SVG icon
className   // optional, additional CSS class, default ones are `Icon Icon--iconName`
width       // optional, default 24
height      // optional, default 24
style       // optional, CSS style object
```
