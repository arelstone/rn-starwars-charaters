import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { PersonCard } from '../PersonCard';
import { personsMock } from '../../../__mocks__/persons.mock';
import { planetsMock } from '../../../__mocks__/planets.mock';
import { findElementByTestId } from '../../utils/testUtils';

let wrapper: ShallowWrapper;
const mockOnPress = jest.fn();

describe('<PersonCard />', () => {
    beforeAll(() => {
        wrapper = shallow(<PersonCard
            charater={personsMock[0]}
            onPress={mockOnPress}
            planet={planetsMock[0]}
        />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the CharaterName', () => {
        expect(findElementByTestId('Text', 'CharaterName', wrapper).prop('children')).toEqual(personsMock[0].name);
    });

    it('should render the PlanetName', () => {
        expect(findElementByTestId('Text', 'PlanetName', wrapper).prop('children')).toEqual(planetsMock[0].name);
    });

    it('should invoke onPress', () => {
        // eslint-disable-next-line
        // @ts-expect-error
        wrapper.prop('onPress')();

        expect(mockOnPress).toHaveBeenCalled();
    });
});
