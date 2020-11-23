import * as Utils from '../storeUtils';

describe('storeUtils.spec.ts', () => {
    describe('getNumber', () => {
        it('should remove all non numbers', () => {
            expect(Utils.getNumber('abcd123')).toEqual(123);
        });
    });

    describe('nextPage', () => {
        it('should return the number in the url', () => {
            expect(Utils.nextPage({ next: 'https://swapi.dev/api/planets/?page=42' })).toEqual(42);
        });
    });
});
