import { Person } from '../../SwApi';
import { StoreResource } from '../root.reducer';
import { DONE_FETCHING_PERSONS, SET_PERSONS, START_FETCHING_PERSONS } from './persons.types';

const INITIAL_STATE: StoreResource<Person[]> = {
    count: 0,
    loading: false,
    nextPage: undefined,
    results: [],
};

export default (state = INITIAL_STATE, { type, payload }): StoreResource<Person[]> => {
    switch (type) {
        case START_FETCHING_PERSONS:
            return {
                ...state,
                results: [],
                loading: true,
            };
        case DONE_FETCHING_PERSONS:
            return {
                ...state,
                loading: false,
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

