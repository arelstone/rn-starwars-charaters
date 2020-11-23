import { DONE_FETCHING_PLANETS, FAILED_FETCHING_PLANETS, SET_PLANETS, START_FETCHING_PLANETS } from '../planet.types';
import * as actions from '../planets.actions';

describe('planet.actions', () => {
    describe('startFetching', () => {
        it('should return correct type', () => {
            expect(actions.startFetching()).toEqual({ type: START_FETCHING_PLANETS });
        });
    });

    describe('doneFetching', () => {
        it('should return correct type', () => {
            expect(actions.doneFetching()).toEqual({ type: DONE_FETCHING_PLANETS });
        });
    });

    describe('failedFetching', () => {
        it('should return correct type', () => {
            expect(actions.failedFetching('This is an error message')).toEqual(expect.objectContaining({ type: FAILED_FETCHING_PLANETS }));
        });
        it('should return correct payload', () => {
            expect(actions.failedFetching('This is an error message')).toEqual(expect.objectContaining({ payload: 'This is an error message' }));
        });
    });

    describe('doneFetching', () => {
        const { payload, type } = actions.setData({
            count: 2,
            next: 'http://swapi.dev/api/planets/?page=2',
            results: [
                {
                    id: 1,
                    name: 'Tatooine',
                    rotation_period: '23',
                    orbital_period: '304',
                    diameter: '10465',
                    climate: 'arid',
                    gravity: '1 standard',
                    terrain: 'desert',
                    surface_water: '1',
                    population: '200000',
                    residents: [],
                    films: [],
                    created: '2014-12-09T13:50:49.641000Z',
                    edited: '2014-12-20T20:58:18.411000Z',
                    url: 'http://swapi.dev/api/planets/1/',
                },
                {
                    id: 2,
                    name: 'Alderaan',
                    rotation_period: '24',
                    orbital_period: '364',
                    diameter: '12500',
                    climate: 'temperate',
                    gravity: '1 standard',
                    terrain: 'grasslands, mountains',
                    surface_water: '40',
                    population: '2000000000',
                    residents: [],
                    films: [],
                    created: '2014-12-10T11:35:48.479000Z',
                    edited: '2014-12-20T20:58:18.420000Z',
                    url: 'http://swapi.dev/api/planets/2/',
                },
            ],
        });

        it('should have correct type', () => {
            expect(type).toEqual(SET_PLANETS);
        });

        it('should have correct count', () => {
            expect(payload.count).toEqual(2);
        });

        it('should have correct nextPage', () => {
            expect(payload.nextPage).toEqual(2);
        });

        it('should have an ID', () => {
            expect(payload.results[0].id).toEqual(1);
        });

    });
});
