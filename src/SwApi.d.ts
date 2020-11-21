type NextOrPrevious = string | null;

export enum ResourceType {
    Film = 'films',
    People = 'people',
    Planet = 'planets',
    Species = 'species',
    Starship = 'starships',
    Vehicle = 'vehicles'
}

export type ResourceUrl = string;

export type Resource = {
    url: ResourceUrl;
    id: number;
    created: string;
    edited: string;
};


export type Person = Resource & {
    birth_year: string;
    eye_color: string;
    films: ResourceUrl[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: ResourceUrl[];
    starships: ResourceUrl[];
    vehicles: ResourceUrl[];
};

export type Planet = Resource & {
    name: string;
    rotationPeriod: string;
    orbitalPeriod: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surfaceWater: string;
    population: string;
    residents: ResourceUrl[];
    films: ResourceUrl[];
};


export type Species = Resource & {
    name: string;
    classification: string;
    designation: string;
    averageHeight: string;
    skinColors: string;
    hairColors: string;
    eyeColors: string;
    averageLifespan: string;
    homeworld: string;
    language: string;
    people: ResourceUrl[];
    films: ResourceUrl[];
};
