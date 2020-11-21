import { Planet } from '../../SwApi';
import { START_FETCHING_PLANETS, DONE_FETCHING_PLANETS, SET_PLANETS } from './planet.types';
import { StoreResource } from '../root.reducer';


const INITIAL_STATE: StoreResource<Planet[]> = {
    count: 0,
    loading: false,
    nextPage: undefined,
    results: [],
};

export default (state = INITIAL_STATE, { type, payload }): StoreResource<Planet[]> => {
    switch (type) {
        case START_FETCHING_PLANETS:
            return {
                ...state,
                results: [],
                loading: true,
            };
        case DONE_FETCHING_PLANETS:
            return {
                ...state,
                loading: false,
            };
        case SET_PLANETS: {
            return {
                ...state,
                ...payload,
                results: [
                    ...state.results,
                    ...payload.results,
                ],
            };
        }
        default:
            return state;
    }
};

