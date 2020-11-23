import { personsMock } from '../../../../__mocks__/persons.mock';
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
            results: personsMock,
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
