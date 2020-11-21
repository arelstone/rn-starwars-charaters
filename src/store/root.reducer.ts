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
    nextPage: number | undefined;
    results: T;
}
