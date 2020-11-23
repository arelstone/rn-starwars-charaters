import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { MainScreen } from '../MainScreen';
import { personsMock } from '../../../__mocks__/persons.mock';
import { planetsMock } from '../../../__mocks__/planets.mock';
import { navigationMock } from '../../../__mocks__/navigation.mock';

let wrapper: ShallowWrapper;
const mockDispatch = jest.fn();

const charaters = {
    count: 2,
    error: {
        hasError: false, message: '',
    },
    loading: false,
    nextPage: undefined,
    results: personsMock,
};

const planets = {
    count: 2,
    error: { hasError: false, message: '' },
    loading: false,
    nextPage: undefined,
    results: planetsMock,
};

describe('<MainScreen />', () => {
    beforeAll(() => {
        wrapper = shallow(<MainScreen
            charaters={charaters}
            planets={planets}
            dispatch={mockDispatch}
            navigation={navigationMock}
        />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('FlatList', () => {
        it('should contain a FlatList', () => {
            expect(wrapper.find('FlatList').exists()).toBeTruthy();
        });

        it('should have correct data', () => {
            expect(wrapper.find('FlatList').prop('data')).toEqual(personsMock);
        });
    });

    describe('Loading', () => {
        it('should render Loading when CHARATERS is loading', () => {
            wrapper.setProps({
                charaters: { ...charaters, loading: true },
            });

            expect(wrapper.find('Loading').exists()).toBeTruthy();
        });

        it('should render Loading when PLANETS is loading', () => {
            wrapper.setProps({
                charaters: { ...charaters, loading: false },
                planets: { ...planets, loading: true },
            });

            expect(wrapper.find('Loading').exists()).toBeTruthy();
        });

        it('should render Loading when both PLANETS and CHARATERS is loading', () => {
            wrapper.setProps({
                charaters: { ...charaters, loading: true },
                planets: { ...planets, loading: true },
            });

            expect(wrapper.find('Loading').exists()).toBeTruthy();
        });

        it('should NOT render loading when both PLANETS and CHARATERS is NOT loading', () => {
            wrapper.setProps({
                charaters: { ...charaters, loading: false },
                planets: { ...planets, loading: false },
            });

            expect(wrapper.find('Loading').exists()).toBeFalsy();
        });
    });

    describe('onPress', () => {
        it('should invoke onPress', () => {
            const item = personsMock[0];

            // eslint-disable-next-line
            // @ts-expect-error
            wrapper.find('FlatList').prop('renderItem')({ item }).props.onPress();

            expect(navigationMock.navigate).toHaveBeenCalledWith('Details', { id: item.id, planetId: item.homeworld_id });
        });
    });

});
