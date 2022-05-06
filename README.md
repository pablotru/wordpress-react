# About The Project

The objective of this project was to develop a functioning hybrid WordPress theme utilizing the WP REST API and ReactJS. Instead of creating a headless ReactJS application (another approach), the application is served through WordPress as a theme allowing PHP variables to be passed to the client-side on render.

## Usage

- Test data used for the development of this theme can be found on the [WordPress Theme Unit Test](https://codex.wordpress.org/Theme_Unit_Test) page

- The `package.json` file has been modified, replacing `react-scripts` with `wp-scripts` package for `start` and `build` commands

```
"scripts": {
  "start": "wp-scripts start",
  "build": "wp-scripts build"
},
```

- The WordPress permalink structure have been statically set to match the React Routes in the `./functions.php` and `./src/Common/WordPress.js` file for SEO purposes

```
public function set_permalink() {
  global $wp_rewrite;
  $wp_rewrite->set_permalink_structure('/post/%postname%/');
}
```

```
export const BLOG_ROUTE = '/page';
export const PERMALINK_ROUTE = '/post';
```

- PHP variables are declared in the `./classes/wp-react-theme-config.php` file and are translated to use with React in the `./src/Common/WordPress.js` file

## Development

- Start development using npm

`npm start`

- or using yarn

`yarn start`

## Node Packages

- [@wordpress/scripts](https://www.npmjs.com/package/@wordpress/scripts)
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-helmet](https://www.npmjs.com/package/react-helmet)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [redux](https://www.npmjs.com/package/redux)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [lodash](https://www.npmjs.com/package/lodash)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [bootstrap](https://www.npmjs.com/package/bootstrap)
- [jquery](https://www.npmjs.com/package/jquery)
- [popper](https://www.npmjs.com/package/popper)

## Live Demo

- The live demo of the project can be found at [wordpress-react.pablotru.me](https://wordpress-react.pablotru.me/)

![Live Demo Screenshot](/Screenshot.png "Live Demo Screenshot")

## Download

- [Download Latest Version](https://github.com/pablotru/wordpress-react/releases/tag/v1.0.0)