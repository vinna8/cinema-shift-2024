export interface Film {
    id: string;
    name: string;
    originalName: string;
    description: string;
    releaseDate: string;
    actors: Actor[];
    directors: Actor[];
    runtime: number;
    genres: string[];
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

interface Actor {
    id: string;
    professions: Profession[];
    fullName: string;
}

type Profession = "ACTOR" | "DIRECTOR";

export interface Schedule {
    date: string;
    seances: Seance[];
}

export interface Seance {
    time: string;
    hall: {
        name: HallName,
        places: Place[][];
    }
    payedTickets: Ticket[];
}

type HallName = "Red" | "Blue" | "Green";

interface Place {
    price: number;
    type: PlaceType;
}

type PlaceType = 'ECONOM' | 'BLOCKED' | 'COMFORT';

interface Ticket {
    filmId: string;
    row: number;
    column: number;
    seance: Seance;
    phone: string;
}

export interface SelectedPlaces {
    hallName: HallName;
    time: string;
    places: {
        row: number;
        column: number;
        price: number;
    }[]
}



export interface FilmState {
    films: Film[];
    film: Film | null;
    schedules: Schedule[];
    selectedSeance: Seance | null;
    selectedPlaces: SelectedPlaces[];
}

export interface FilmAction {
    type: string;
    payload?: any;
}