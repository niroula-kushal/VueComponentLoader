# VueComponentLoader
Component Loader For Vue Apps using cdn build

### Register A Component.

```js
//TestComponent.js
const TestComponent = {
    setup() {
        return {
            name : "Name"
        };
    }
};
if(typeof ComponentLoader !== undefined) {
    ComponentLoader.Register("test-c", TestComponent); //Register as 'test-c'.
    ComponentLoader.Loaders.TestComponent = (vueApp) => ComponentLoader.Use(vueApp, 'test-c', TestComponent); //Register a loader that will load it automatically
}
```


### Use a component in an app

```js
//app.js
const appVm = Vue.createApp({
    setup() {
        return {
            name: "Name"
        };
    }
});
ComponentLoader.Use(appVm,"another-name", TestComponent); // Use one component.
ComponentLoader.Loaders.All(appVm); // Use all the components that have been registered
ComponentLoader.Loaders.TestComponent(appVm); //Use single component registered as TestComponent
const app = appVm.mount("#app");
```
