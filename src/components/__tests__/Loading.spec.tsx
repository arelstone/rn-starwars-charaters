import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Loading from '../Loading';

let wrapper: ShallowWrapper;

describe('<Loading />', () => {
    beforeAll(() => {
        wrapper = shallow(<Loading />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
