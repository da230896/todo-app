import { hasMany, Model, Server } from "miragejs";

new Server({
    // You'll typically use the Schema to access the model class, which can be used to find or create instances.
    models: {
        todo: Model.extend({}),
        list: Model.extend({
            todo: hasMany(),
        })
    },


    routes() {
        this.namespace = 'fakeApi'

    }


})