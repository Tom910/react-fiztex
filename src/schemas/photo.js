import { normalize, schema } from 'normalizr';

const user = new schema.Entity('authors');

const url = new schema.Entity('linkImages', undefined, {
    idAttribute: (value, parent) => parent.id
});

const photo = new schema.Entity('photos', {
    user: user,
    urls: url
});

export default new schema.Array(photo);
