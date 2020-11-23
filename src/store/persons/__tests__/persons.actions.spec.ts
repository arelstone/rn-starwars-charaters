import * as actions from '../persons.actions';
import { DONE_FETCHING_PERSONS, FAILED_FETCHING_PERSONS, SET_PERSONS, START_FETCHING_PERSONS } from '../persons.types';

describe('persons.actions', () => {
    describe('startFetching', () => {
        it('should return correct type', () => {
            expect(actions.startFetching()).toEqual({ type: START_FETCHING_PERSONS });
        });
    });

    describe('doneFetching', () => {
        it('should return correct type', () => {
            expect(actions.doneFetching()).toEqual({ type: DONE_FETCHING_PERSONS });
        });
    });

    describe('failedFetching', () => {
        it('should return correct type', () => {
            expect(actions.failedFetching('This is an error message')).toEqual(expect.objectContaining({ type: FAILED_FETCHING_PERSONS }));
        });
        it('should return correct payload', () => {
            expect(actions.failedFetching('This is an error message')).toEqual(expect.objectContaining({ payload: 'This is an error message' }));
        });
    });

    describe('setData', () => {
        const { type, payload } = actions.setData({
            count: 2,
            next: 'http://swapi.dev/api/people/?page=2',
            results: [
                {
                    birth_year: '19 BBY',
                    eye_color: 'Blue',
                    films: [],
                    gender: 'Male',
                    hair_color: 'Blond',
                    height: '172',
                    homeworld: 'https://swapi.dev/api/planets/1/',
                    mass: '77',
                    name: 'Luke Skywalker',
                    skin_color: 'Fair',
                    created: '2014-12-09T13:50:51.644000Z',
                    edited: '2014-12-10T13:52:43.172000Z',
                    species: [],
                    starships: [],
                    url: 'https://swapi.dev/api/people/1/',
                    vehicles: [
                        'https://swapi.dev/api/vehicles/14/',
                    ],
                    homeworld_id: 1,
                    id: 1,
                },
                {
                    name: 'C-3PO',
                    height: '167',
                    mass: '75',
                    hair_color: 'n/a',
                    skin_color: 'gold',
                    eye_color: 'yellow',
                    birth_year: '112BBY',
                    gender: 'n/a',
                    homeworld: 'http://swapi.dev/api/planets/1/',
                    films: [],
                    species: [],
                    vehicles: [],
                    starships: [],
                    created: '2014-12-10T15:10:51.357000Z',
                    edited: '2014-12-20T21:17:50.309000Z',
                    url: 'http://swapi.dev/api/people/2/',
                    id: 2,
                    homeworld_id: 1,
                },
            ],
        });

        it('should have correct type', () => {
            expect(type).toEqual(SET_PERSONS);
        });

        it('should have correct count', () => {
            expect(payload.count).toEqual(2);
        });

        it('should have correct nextPage', () => {
            expect(payload.nextPage).toEqual(2);
        });

        describe('results', () => {
            it('should have a length of 2', () => {
                expect(payload.results).toHaveLength(2);
            });

            it('should be sorted alphabetically', () => {
                expect(payload.results[0].name).toEqual('C-3PO');
                expect(payload.results[1].name).toEqual('Luke Skywalker');
            });

            it('should have an ID', () => {
                expect(payload.results[0].id).toEqual(2);
            });

            it('should have an homeworld_id', () => {
                expect(payload.results[0].homeworld_id).toEqual(1);
            });
        });
    });
});
