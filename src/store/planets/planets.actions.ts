import { Dispatch } from 'react';
import { GetState } from '..';
import { Planet } from '../../SwApi';
import { getNumber } from '../../utils/storeUtils';
import { SetPlanetsParams, FetchPlanetsAction } from './planet.types';

export const fetchPlanets = (page = 1) => async (dispatch: Dispatch<FetchPlanetsAction>, getState: GetState) => {
    if (page === 1) {
        dispatch({ type: 'START_FETCHING_PLANETS' });
    }
    const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
        .then(r => r.json())
        .catch(error => console.log('###error', error));

    const nextPage = response.next && getNumber(response.next);

    const results = response.results.map((result: Planet) => ({
        ...result,
        id: getNumber(result.url),
    }));

    dispatch(setPlanets({
        nextPage: response.next && getNumber(response.next),
        results: [...results, ...getState().planets.results],
        count: response.count,
    }));

    // if (nextPage) {
    //     return dispatch(fetchPlanets(nextPage));
    // }

    return dispatch({ type: 'DONE_FETCHING_PLANETS' });
};

const setPlanets = (payload: SetPlanetsParams) => dispatch => {
    return dispatch({
        type: 'SET_PLANETS',
        payload,
    });
};
