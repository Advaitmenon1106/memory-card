import { createClient } from 'pexels';

export function queryImage(query, perPagePics) {
    const client = createClient('w93M0NVwaG2KkpiVWcIizUINC4lWLaUP9siQKz7dknMuIgR7lfgUrOoL');
    const resPromise = client.photos.search({ query, per_page: perPagePics })

    return resPromise
}