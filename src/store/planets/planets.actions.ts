import { Planet, ResourceType } from '../../SwApi';
import { getNumber, nextPage } from '../../utils/storeUtils';
import { FAILED_FETCHING_PLANETS, START_FETCHING_PLANETS, DONE_FETCHING_PLANETS, SET_PLANETS } from './planet.types';
import { baseUrl } from '../../config';
import { SetDataParam } from '../root.reducer';

export const fetchPlanets = (page = 1, uri: ResourceType = ResourceType.Planet) => async (dispatch: any) => {
    if (page === 1) {
        dispatch(startFetching());
    }
    const response = await fetch(`${baseUrl()}/${uri}/?page=${page}`)
        .then(r => r.json())
        .catch(error => dispatch(failedFetching(error.message)));

    const next = nextPage(response);

    dispatch(setData(response));

    if (next) {
        return dispatch(fetchPlanets(next));
    }

    return dispatch(doneFetching());
};

export const startFetching = () => {
    return { type: START_FETCHING_PLANETS };
};

export const failedFetching = (payload: string) => {
    return {
        type: FAILED_FETCHING_PLANETS,
        payload,
    };
};

export const doneFetching = () => {
    return { type: DONE_FETCHING_PLANETS };
};

export const setData = (payload: SetDataParam<Planet[]>) => {
    const next = nextPage(payload);

    return {
        type: SET_PLANETS,
        payload: {
            nextPage: next,
            count: payload.count,
            results: payload.results.map((result: Planet) => ({
                ...result,
                id: getNumber(result.url),
            })),
        },
    };

};
