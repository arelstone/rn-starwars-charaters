import { Person } from '../../SwApi';
import { StoreResource } from '../root.reducer';
import { DONE_FETCHING_PERSONS, FAILED_FETCHING_PERSONS, SET_PERSONS, START_FETCHING_PERSONS } from './persons.types';

export const INITIAL_STATE: StoreResource<Person[]> = {
    count: 0,
    loading: false,
    error: {
        hasError: false,
        message: '',
    },
    nextPage: undefined,
    results: [],
};

export default (state = INITIAL_STATE, { type, payload }: any): StoreResource<Person[]> => {
    switch (type) {
        case START_FETCHING_PERSONS:
            return {
                ...state,
                results: [],
                loading: true,
                error: {
                    hasError: false,
                    message: '',
                },
            };
        case DONE_FETCHING_PERSONS:
            return {
                ...state,
                loading: false,
            };
        case FAILED_FETCHING_PERSONS:
            return {
                ...state,
                loading: false,
                error: {
                    hasError: true,
                    message: payload,
                },
            };
        case SET_PERSONS: {
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

