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