const TestComponent = {
    setup() {
        return {
            name : "Name"
        };
    }
};
if(typeof ComponentLoader !== undefined) {
    ComponentLoader.Register("test-c", TestComponent);
    ComponentLoader.Loaders.TestComponent = (vueApp) => ComponentLoader.Use(vueApp, 'test-c', TestComponent);
}