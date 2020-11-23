import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { DetailsScreen } from '../DetailsScreen';
import { navigationMock } from '../../../__mocks__/navigation.mock';
import { personsMock } from '../../../__mocks__/persons.mock';
import { planetsMock } from '../../../__mocks__/planets.mock';
import { findElementByTestId } from '../../utils/testUtils';

let wrapper: ShallowWrapper;
const charater = personsMock.find(p => p.id === 1);
const planet = planetsMock.find(p => p.id === 1);

describe('<DetailsScreen />', () => {
    beforeAll(() => {
        wrapper = shallow(<DetailsScreen
            navigation={navigationMock}
            route={{
                key: '',
                name: 'Details',
                params: {
                    id: 1,
                    planetId: 1,
                },
            }}
            {...{ charater, planet }}
        />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should display the name of the Charater', () => {
        expect(findElementByTestId('Text', 'CharaterName', wrapper).at(0).prop('children')).toEqual(charater?.name);
    });

    it('should display the name of the Planet', () => {
        expect(findElementByTestId('Text', 'PlanetName', wrapper).at(0).prop('children').includes(planet?.name)).toEqual(true);
    });

    it('should display the name of the HairColor', () => {
        expect(findElementByTestId('Text', 'HairColor', wrapper).at(0).prop('children').includes(charater?.hair_color)).toEqual(true);
    });

    it('should display the name of the EyeColor', () => {
        expect(findElementByTestId('Text', 'EyeColor', wrapper).at(0).prop('children').includes(charater?.eye_color)).toEqual(true);
    });

    it('should display the name of the SkinColor', () => {
        expect(findElementByTestId('Text', 'SkinColor', wrapper).at(0).prop('children').includes(charater?.skin_color)).toEqual(true);
    });


});
