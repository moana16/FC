import { createRouter } from "../core/jimin";
import Home from './Home';
import Movie from './Movie';

export default createRouter([
    {path : '#/', component : Home},
    {path : '#/movie', component : Movie},
])
