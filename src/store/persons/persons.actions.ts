import { Person, ResourceType } from '../../SwApi';
import { getNumber, nextPage } from '../../utils/storeUtils';
import { FAILED_FETCHING_PERSONS, START_FETCHING_PERSONS, SET_PERSONS, DONE_FETCHING_PERSONS } from './persons.types';
import { baseUrl } from '../../config';

export const fetchPersons = (page = 1, uri: ResourceType = ResourceType.People) => async (dispatch: any) => {
    if (page === 1) {
        dispatch({ type: START_FETCHING_PERSONS });
    }

    const response = await fetch(`${baseUrl()}/${uri}/?page=${page}`)
        .then(r => r.json())
        .catch(error => dispatch({
            type: FAILED_FETCHING_PERSONS,
            payload: error.message,
        }));

    const next = nextPage(response);

    dispatch({
        type: SET_PERSONS,
        payload: {
            nextPage: next,
            count: response.count,
            results: response.results.map((person: Person) => ({
                ...person,
                id: getNumber(person.url),
                homeworld_id: getNumber(person.homeworld),
            }))
                .sort((a: Person, b: Person) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())),
        },
    });

    if (next) {
        return dispatch(fetchPersons(next));
    }
    console.log('###HERE', next);


    return dispatch({ type: DONE_FETCHING_PERSONS });
};
