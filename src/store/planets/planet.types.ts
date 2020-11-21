import { Planet } from '../../SwApi';

export const START_FETCHING_PLANETS = 'START_FETCHING_PLANETS';
export const DONE_FETCHING_PLANETS = 'DONE_FETCHING_PLANETS';
export const SET_PLANETS = 'SET_PLANETS';
export const FAILED_FETCHING_PLANETS = 'FAILED_FETCHING_PLANETS';

export type SetPlanetsParams = {
    count: number;
    nextPage: number;
    results: Planet[];
}

type PlanetActionTypes = typeof SET_PLANETS
    | typeof DONE_FETCHING_PLANETS
    | typeof START_FETCHING_PLANETS
    | typeof FAILED_FETCHING_PLANETS;

export type FetchPlanetsAction = {
    type: PlanetActionTypes;
}
