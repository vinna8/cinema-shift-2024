export interface IFilm {
    id: string;
    name: string;
    originName: string;
    description: string;
    releaseDate: string;
    actors: IActor[];
    directors: IActor[];
    runtime: number;
    genres: [];
    userRatings: { 
        kinopoisk: string;
        imdb: string;
    };
    img: string;
    country: {
        name: string,
        code: string,
        code2: string,
        id: number;
    }
}

interface IActor {
    id: string;
    professions: TProfession[];
    fullName: string;
}

type TProfession = "ACTOR" | "DIRECTOR";
