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
  - So, most style is style sheets, but I did one of example (Badge.vue) of showing how to ship style with a component
    reuse.
  - This also means it's CSS, not SASS.
- Purposefully choosing when to enumerate

Using the enumeration doesn't make a load of sense for some fields. E.g, youre not going to say 35,000 GBP Gross, and
show somewhere in the UI that "Net" is the other option.