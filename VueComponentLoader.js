const ComponentLoader = {
    Components: [
        // {name: 'select-2', component: Select2}
    ],
    Register(name, component) {
        this.Components.push({name: name, component: component});
    },
    Use(vueApp, name, component) {
        vueApp.component(name, component);
    },
    Loaders: {
        All: (vueApp) => {
            for (const {name, component} of ComponentLoader.Components) {
                ComponentLoader.Use(vueApp, name, component);
            }
        }
    }
};