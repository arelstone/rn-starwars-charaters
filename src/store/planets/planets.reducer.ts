import { Planet } from '../../SwApi';
import { START_FETCHING_PLANETS, DONE_FETCHING_PLANETS, SET_PLANETS, FAILED_FETCHING_PLANETS } from './planet.types';
import { StoreResource } from '../root.reducer';


export const INITIAL_STATE: StoreResource<Planet[]> = {
    count: 0,
    loading: false,
    nextPage: undefined,
    results: [],
    error: {
        hasError: false,
        message: '',
    },
};

export default (state = INITIAL_STATE, { type, payload }: any): StoreResource<Planet[]> => {
    switch (type) {
        case START_FETCHING_PLANETS:
            return {
                ...state,
                results: [],
                loading: true,
                error: {
                    hasError: false,
                    message: '',
                },
            };
        case DONE_FETCHING_PLANETS:
            return {
                ...state,
                loading: false,
            };
        case FAILED_FETCHING_PLANETS:
            return {
                ...state,
                loading: false,
                error: {
                    hasError: true,
                    message: payload,
                },
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

