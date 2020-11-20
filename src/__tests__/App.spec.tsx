import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import App from '../App';

let wrapper: ShallowWrapper;

describe('<App />', () => {
    beforeAll(() => {
        wrapper = shallow(<App />);
    });

    it('should match snapshot', () => {
        console.log(wrapper.debug());

        expect(wrapper).toMatchSnapshot();
    });
});
