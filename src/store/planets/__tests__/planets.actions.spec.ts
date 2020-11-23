import { planetsMock } from '../../../../__mocks__/planets.mock';
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
            results: planetsMock,
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
