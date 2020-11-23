import { combineReducers } from 'redux';

import persons from './persons/persons.reducer';
import planets from './planets/planets.reducer';

export default combineReducers({
    persons,
    planets,
});


export type StoreResource<T> = {
    count: number;
    loading: boolean;
    error: {
        hasError: boolean;
        message: string;
    };
    nextPage: number | undefined;
    results: T;
}

export type SetDataParam<T> = {
    count: number;
    next: string;
    previous?: string;
    results: T;
}
