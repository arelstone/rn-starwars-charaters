import { Person, ResourceType } from '../../SwApi';
import { getNumber, nextPage } from '../../utils/storeUtils';
import { FAILED_FETCHING_PERSONS, START_FETCHING_PERSONS, SET_PERSONS, DONE_FETCHING_PERSONS } from './persons.types';
import { baseUrl } from '../../config';
import { SetDataParam } from '../root.reducer';

export const fetchPersons = (page = 1, uri: ResourceType = ResourceType.People) => async (dispatch: any) => {
    if (page === 1) {
        dispatch(startFetching());
    }

    const response = await fetch(`${baseUrl()}/${uri}/?page=${page}`)
        .then(r => r.json())
        .catch(error => dispatch(failedFetching(error.message)));

    const next = nextPage(response);

    dispatch(setData(response));

    if (next) {
        return dispatch(fetchPersons(next));
    }

    return dispatch(doneFetching());
};

export const startFetching = () => {
    return { type: START_FETCHING_PERSONS };
};

export const failedFetching = (payload: string) => {
    return {
        type: FAILED_FETCHING_PERSONS,
        payload,
    };
};

export const doneFetching = () => {
    return { type: DONE_FETCHING_PERSONS };
};

export const setData = (payload: SetDataParam<Person[]>) => {
    const next = nextPage(payload);

    return {
        type: SET_PERSONS,
        payload: {
            nextPage: next,
            count: payload.count,
            results: payload.results.map((person: Person) => ({
                ...person,
                id: getNumber(person.url),
                homeworld_id: getNumber(person.homeworld),
            }))
                .sort((a: Person, b: Person) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())),
        },
    };
};
