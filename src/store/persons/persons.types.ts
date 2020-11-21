import { Person } from '../../SwApi';

export const START_FETCHING_PERSONS = 'START_FETCHING_PERSONS';
export const DONE_FETCHING_PERSONS = 'DONE_FETCHING_PERSONS';
export const SET_PERSONS = 'SET_PERSONS';
export const FAILED_FETCHING_PERSONS = 'FAILED_FETCHING_PERSONS';

export type SetPersonsParams = {
    count: number;
    nextPage: number;
    results: Person[];
}

export type FetchPersonsAction = {
    type: PersonActionTypes;
}

type PersonActionTypes = typeof START_FETCHING_PERSONS
    | typeof DONE_FETCHING_PERSONS
    | typeof FAILED_FETCHING_PERSONS;

export type SetPersonsAction = {
    type: typeof SET_PERSONS;
    payload: SetPersonsParams;
}
