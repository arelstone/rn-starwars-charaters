import { DONE_FETCHING_PLANETS, FAILED_FETCHING_PLANETS, SET_PLANETS, START_FETCHING_PLANETS } from '../planet.types';
import reducer, { INITIAL_STATE } from '../planets.reducer';

describe('planet.reducer', () => {
    it('should return the INITIAL_STATE', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    describe(START_FETCHING_PLANETS, () => {
        it('should set loading to TRUE', () => {
            const action = { type: START_FETCHING_PLANETS };

            expect(reducer(undefined, action)).toEqual(
                expect.objectContaining({ loading: true }),
            );
        });
    });

    describe(FAILED_FETCHING_PLANETS, () => {
        const action = { type: FAILED_FETCHING_PLANETS, payload: 'Something went wrong' };

        it('should set loading to FALSE', () => {
            expect(reducer(undefined, action)).toEqual(
                expect.objectContaining({
                    loading: false,
                    error: { hasError: true, message: action.payload },
                }),
            );
        });
    });

    describe(DONE_FETCHING_PLANETS, () => {
        it('should set loading to FALSE', () => {
            const action = { type: DONE_FETCHING_PLANETS };

            expect(reducer(undefined, action)).toEqual(
                expect.objectContaining({ loading: false }),
            );
        });
    });

    describe(SET_PLANETS, () => {
        it('should set payload into results', () => {
            const initialPlanet = { 'climate': 'arid', 'created': '2014-12-09T13:50:49.641000Z', 'diameter': '10465', 'edited': '2014-12-20T20:58:18.411000Z', 'films': ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/3/', 'http://swapi.dev/api/films/4/', 'http://swapi.dev/api/films/5/', 'http://swapi.dev/api/films/6/'], 'gravity': '1 standard', 'id': 1, 'name': 'Tatooine', 'orbital_period': '304', 'population': '200000', 'residents': ['http://swapi.dev/api/people/1/', 'http://swapi.dev/api/people/2/', 'http://swapi.dev/api/people/4/', 'http://swapi.dev/api/people/6/', 'http://swapi.dev/api/people/7/', 'http://swapi.dev/api/people/8/', 'http://swapi.dev/api/people/9/', 'http://swapi.dev/api/people/11/', 'http://swapi.dev/api/people/43/', 'http://swapi.dev/api/people/62/'], 'rotation_period': '23', 'surface_water': '1', 'terrain': 'desert', 'url': 'http://swapi.dev/api/planets/1/' };
            const initialState = {
                count: 1,
                loading: true,
                results: [{ ...initialPlanet, id: 1, name: 'Planet #1' }],
                nextPage: undefined,
                error: { hasError: false, message: '' },
            };
            const action = {
                type: SET_PLANETS,
                payload: {
                    results: [
                        { ...initialPlanet, id: 2, name: 'Planet #2' },
                        { ...initialPlanet, id: 3, name: 'Planet #3' },
                    ],
                },
            };

            expect(reducer(initialState, action).results).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ ...initialPlanet, id: 2, name: 'Planet #2' }),
                    expect.objectContaining({ ...initialPlanet, id: 3, name: 'Planet #3' }),
                ]),
            );
        });
    });

});
