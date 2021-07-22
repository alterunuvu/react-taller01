import { GetData } from "../../util/getData";
import './movies.css';

export default function Movies() {
    let movies = GetData();
    return (
    <div className="movies-grid">
        { movies.map ( (movie) => (
            <div key={movie.id}>{movie.title}</div>)
        )}
    </div>
    )
}