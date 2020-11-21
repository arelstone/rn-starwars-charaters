import { DONE_FETCHING_PERSONS, FAILED_FETCHING_PERSONS, SET_PERSONS, START_FETCHING_PERSONS } from '../persons.types';
import reducer, { INITIAL_STATE } from '../persons.reducer';
import { Person } from '../../../SwApi';

describe('persons.reducer', () => {
    it('should return the INITIAL_STATE', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    describe(START_FETCHING_PERSONS, () => {
        it('should set loading to TRUE', () => {
            const action = { type: START_FETCHING_PERSONS };

            expect(reducer(undefined, action)).toEqual(
                expect.objectContaining({ loading: true }),
            );
        });
    });

    describe(FAILED_FETCHING_PERSONS, () => {
        const action = { type: FAILED_FETCHING_PERSONS, payload: 'Something went wrong' };

        it('should set loading to FALSE', () => {
            expect(reducer(undefined, action)).toEqual(
                expect.objectContaining({
                    loading: false,
                    error: { hasError: true, message: action.payload },
                }),
            );
        });
    });

    describe(DONE_FETCHING_PERSONS, () => {
        it('should set loading to FALSE', () => {
            const action = { type: DONE_FETCHING_PERSONS };

            expect(reducer(undefined, action)).toEqual(
                expect.objectContaining({ loading: false }),
            );
        });
    });

    describe(SET_PERSONS, () => {
        it('should set payload into results', () => {
            const initialPerson: Person = { birth_year: '1985', created: '', edited: '', eye_color: 'green', films: [], gender: 'male', hair_color: 'yellow', name: 'Person #1', homeworld_id: 1, homeworld: '', url: '', vehicles: [], height: '185', mass: '1', skin_color: 'light', id: 1, species: ['human'], starships: [] };
            const initialState = {
                count: 1,
                loading: true,
                results: [{ ...initialPerson, id: 1, name: 'Person #1' }],
                nextPage: undefined,
                error: { hasError: false, message: '' },
            };
            const action = {
                type: SET_PERSONS,
                payload: {
                    results: [
                        { ...initialPerson, id: 2, name: 'Person #2' },
                        { ...initialPerson, id: 3, name: 'Person #3' },
                    ],
                },
            };

            expect(reducer(initialState, action).results).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ ...initialPerson, id: 2, name: 'Person #2' }),
                    expect.objectContaining({ ...initialPerson, id: 3, name: 'Person #3' }),
                ]),
            );
        });
    });
});
