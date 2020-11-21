import { Planet, ResourceType } from '../../SwApi';
import { getNumber, nextPage } from '../../utils/storeUtils';
import { FAILED_FETCHING_PLANETS, START_FETCHING_PLANETS, DONE_FETCHING_PLANETS, SET_PLANETS } from './planet.types';
import { baseUrl } from '../../config';

export const fetchPlanets = (page = 1, uri: ResourceType = ResourceType.Planet) => async (dispatch: any) => {
    if (page === 1) {
        dispatch({ type: START_FETCHING_PLANETS });
    }
    const response = await fetch(`${baseUrl()}/${uri}/?page=${page}`)
        .then(r => r.json())
        .catch(error => dispatch({
            type: FAILED_FETCHING_PLANETS,
            payload: error.message,
        }));

    const next = nextPage(response);

    dispatch({
        type: SET_PLANETS,
        payload: {
            nextPage: response.next && getNumber(response.next),
            count: response.count,
            results: response.results.map((result: Planet) => ({
                ...result,
                id: getNumber(result.url),
            })),
        },
    });

    if (next) {
        return dispatch(fetchPlanets(next));
    }

    return dispatch({ type: DONE_FETCHING_PLANETS });
};

