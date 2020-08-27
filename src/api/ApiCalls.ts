import Character from "../data-models/characters";
import Movie from "../data-models/movie";

/* ------------------------------------------------------------------------------------------------------------------ */
export async function fetchCharacterList() {
    try {
        const url = 'https://swapi.dev/api/people/';
        const response = await fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json'
            },
        });
        if (!response.ok) {
            return {
                success: false,
                data: null,
                error: new Error(response.statusText),
            };
        }
        const data = await response.json();
        return {
            success: true,
            data: Character.FromList(data.results),
            error: null,
        };
    } catch (error) {
        return {
            success: false,
            data: null,
            error,
        };
    }
}
/* ------------------------------------------------------------------------------------------------------------------ */
export async function fetchMovieInfo(MovieURL: string) {
    try {
        const url = MovieURL;
        const response = await fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json'
            },
        });
        if (!response.ok) {
            return {
                success: false,
                data: null,
                error: new Error(response.statusText),
            };
        }
        const data = await response.json();
        return {
            success: true,
            data: Movie.From(data),
            error: null,
        };
    } catch (error) {
        return {
            success: false,
            data: null,
            error,
        };
    }
}
/* ------------------------------------------------------------------------------------------------------------------ */