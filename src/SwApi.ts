export enum ResourceType {
    People = 'people',
    Planet = 'planets',
}
export type Gender = 'male' | 'female' | 'hermaphrodite' | 'none' | 'n/a';
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
    gender: Gender;
    hair_color: string;
    height: string;
    homeworld: string;
    homeworld_id: number;
    mass: string;
    name: string;
    skin_color: string;
    species: ResourceUrl[];
    starships: ResourceUrl[];
    vehicles: ResourceUrl[];
};

export type Planet = Resource & {
    id: number;
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: ResourceUrl[];
    films: ResourceUrl[];
};
