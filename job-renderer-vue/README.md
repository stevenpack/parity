# job-renderer-vue

> Parity job renderer

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

Notes

- This exercise is heavy on rendering and re-usable components, but light on state, controllers, remote data retrieval
- Therefore choosing Vue.js to provide templating/loading over a React/Angular
- I took a template to accelerate a nice look and feel.
  - So, most style is style sheets, but I did extract some style to components to show how I would build reusable components
  - This also means it's CSS, not SASS.
- Tests the script components are quite testable, but I haven't set up karma for this project
- I'm not a designer