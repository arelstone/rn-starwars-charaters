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
    id: string;
    created: string;
    edited: string;
};


export type People = Resource & {
    birthYear: string;
    eyeEolor: string;
    films: ResourceUrl[];
    gender: string;
    hairColor: string;
    height: string;
    homeWorld: string;
    mass: string;
    name: string;
    skinColor: string;
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
