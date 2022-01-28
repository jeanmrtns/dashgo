import { createServer, Factory, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

type User = {
    id: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `${faker.name.firstName()} ${faker.name.lastName()}`;
                },
                email(i: number) {
                    return faker.internet.email();
                },
                createdAt() {
                    return faker.date.recent(30);
                },
            })
        },

        seeds(server) {
            server.createList('user', 10);
        },

        routes() {
            this.namespace = 'api';
            this.timing = 2000;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough(); // All request on API pass on mirage. Case this route is not a mirage route, it will pass to the other API, if there is.
        }
    });

    return server;
}
