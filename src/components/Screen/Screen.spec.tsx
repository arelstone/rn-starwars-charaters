import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Screen from './Screen';
import { Text } from 'react-native';

let wrapper: ShallowWrapper;

describe('<Screen />', () => {
    beforeAll(() => {
        wrapper = shallow(<Screen>
            <Text>The ScreenContent</Text>
        </Screen>);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have flex:1', () => {
        expect(wrapper.prop('style')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ flex: 1 }),
            ]),
        );
    });
});
