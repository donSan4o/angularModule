import { environment } from "src/environments/environment.development";

const {API} = environment;
const jsonPlaceholderURL = "https://jsonplaceholder.typicode.com";

const users = `${jsonPlaceholderURL}/users`;
const posts = `${jsonPlaceholderURL}/posts`;
const cars = `${API}/cars`

const urls = {
    users: {
        base: users,
        byId:(id: number): string => `${users}/${id}`
    },
    posts: {
        base: posts,
        byId:(id: number): string => `${posts}/${id}`
    },
    cars: {
        base: cars,
        byId: (id: number): string => `${cars}/${id}`
    }
}

export {
    urls
}