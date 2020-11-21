import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Screen from '../Screen';
import { Text } from 'react-native';
import { findElementByTestId } from '../../utils/testUtils';

let wrapper: ShallowWrapper;

describe('<Screen />', () => {
    beforeAll(() => {
        wrapper = shallow(<Screen>
            <Text testID="Children">Hello world</Text>
        </Screen>);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should display children', () => {
        expect(findElementByTestId(Text, 'Children', wrapper).prop('children')).toEqual('Hello world');
    });

    it('should apply styles', () => {
        wrapper.setProps({
            style: {
                backgroundColor: 'red',
            },
        });

        expect(wrapper.prop('style')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ flex: 1 }),
                expect.objectContaining({ backgroundColor: 'red' }),
            ]),
        );
    });
});
