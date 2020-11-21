import { Dispatch } from 'react';
import Animated from 'react-native-reanimated';
import { GetState } from '..';
import { Person } from '../../SwApi';
import { getNumber } from '../../utils/storeUtils';
import { SetPersonsParams, FetchPersonsAction } from './persons.types';

export const fetchPersons = (page = 1) => async (dispatch: Dispatch<FetchPersonsAction>, getState: GetState) => {
    if (page === 1) {
        dispatch({ type: 'START_FETCHING_PERSONS' });
    }
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then(r => r.json())
        .catch(error => console.log('###error', error));

    const nextPage = response.next && getNumber(response.next);

    const results: Person[] = response.results.map((person: Person) => ({
        ...person,
        id: getNumber(person.url),
    }))
        .sort((a: Person, b: Person) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    dispatch(setPersons({
        nextPage: response.next && getNumber(response.next),
        results: [...results],
        count: response.count,
    }));

    if (nextPage) {
        return dispatch(fetchPersons(nextPage));
    }

    return dispatch({ type: 'DONE_FETCHING_PERSONS' });
};

const setPersons = (payload: SetPersonsParams) => dispatch => {
    return dispatch({
        type: 'SET_PERSONS',
        payload,
    });
};
