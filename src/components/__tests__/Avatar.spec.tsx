import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Avatar from '../Avatar';

let wrapper: ShallowWrapper;

describe('<Avatar />', () => {
    beforeAll(() => {
        wrapper = shallow(<Avatar
            gender="female"
            hairColor="red"
            skinColor="tanned"
        />);
    });


    describe('topType', () => {
        it('should have LongHairStraight for `FEMALE`', () => {
            wrapper.setProps({ gender: 'female' });
            expect(wrapper.prop('topType')).toEqual('LongHairStraight');
        });

        it('should have ShortHairShortRound for `MALE`', () => {
            wrapper.setProps({ gender: 'male' });
            expect(wrapper.prop('topType')).toEqual('ShortHairShortRound');
        });

        it('should have NoHair for `N/A`', () => {
            wrapper.setProps({ gender: 'n/a' });
            expect(wrapper.prop('topType')).toEqual('NoHair');
        });

        it('should have NoHair for `none`', () => {
            wrapper.setProps({ gender: 'none' });
            expect(wrapper.prop('topType')).toEqual('NoHair');
        });

        it('should have NoHair for `hermaphrodite`', () => {
            wrapper.setProps({ gender: 'hermaphrodite' });
            expect(wrapper.prop('topType')).toEqual('LongHairBun');
        });
    });

    describe('hairColor & facialHairColor', () => {
        it('should have Auburn for `auburn`', () => {
            wrapper.setProps({ hairColor: 'auburn' });
            expect(wrapper.prop('hairColor')).toEqual('Auburn');
            expect(wrapper.prop('facialHairColor')).toEqual('Auburn');
        });

        it('should have Brown for `brown`', () => {
            wrapper.setProps({ hairColor: 'brown' });
            expect(wrapper.prop('hairColor')).toEqual('Brown');
            expect(wrapper.prop('facialHairColor')).toEqual('Brown');
        });

        it('should have Black for `black`', () => {
            wrapper.setProps({ hairColor: 'black' });
            expect(wrapper.prop('hairColor')).toEqual('Black');
            expect(wrapper.prop('facialHairColor')).toEqual('Black');
        });

        it('should have Blonde for `blonde`', () => {
            wrapper.setProps({ hairColor: 'blonde' });
            expect(wrapper.prop('hairColor')).toEqual('Blonde');
            expect(wrapper.prop('facialHairColor')).toEqual('Blonde');
        });

        it('should have SilverGray for `white`', () => {
            wrapper.setProps({ hairColor: 'white' });
            expect(wrapper.prop('hairColor')).toEqual('SilverGray');
            expect(wrapper.prop('facialHairColor')).toEqual('SilverGray');
        });

        it('should have Platinum for `grey`', () => {
            wrapper.setProps({ hairColor: 'grey' });
            expect(wrapper.prop('hairColor')).toEqual('Platinum');
            expect(wrapper.prop('facialHairColor')).toEqual('Platinum');
        });

        it('should have NoHair for `n/a`', () => {
            wrapper.setProps({ hairColor: 'n/a' });
            expect(wrapper.prop('hairColor')).toEqual('NoHair');
            expect(wrapper.prop('facialHairColor')).toEqual('NoHair');
        });

        it('should have NoHair for `none`', () => {
            wrapper.setProps({ hairColor: 'none' });
            expect(wrapper.prop('hairColor')).toEqual('NoHair');
            expect(wrapper.prop('facialHairColor')).toEqual('NoHair');
        });


        it('should have Platinum for `auburn, grey`', () => {
            wrapper.setProps({ hairColor: 'auburn, grey' });
            expect(wrapper.prop('hairColor')).toEqual('Platinum');
            expect(wrapper.prop('facialHairColor')).toEqual('Platinum');
        });

        it('should have PastelPink for `auburn, grey`', () => {
            wrapper.setProps({ hairColor: 'auburn, white' });
            expect(wrapper.prop('hairColor')).toEqual('PastelPink');
            expect(wrapper.prop('facialHairColor')).toEqual('PastelPink');
        });


        it('should have BlondeGolden for `brown, grey`', () => {
            wrapper.setProps({ hairColor: 'brown, grey' });
            expect(wrapper.prop('hairColor')).toEqual('BlondeGolden');
            expect(wrapper.prop('facialHairColor')).toEqual('BlondeGolden');
        });

    });

    describe('clotheType', () => {
        it('should have ShirtVNeck for `FEMALE`', () => {
            wrapper.setProps({ gender: 'female' });
            expect(wrapper.prop('clotheType')).toEqual('ShirtVNeck');
        });

        it('should have BlazerShirt for `MALE`', () => {
            wrapper.setProps({ gender: 'male' });
            expect(wrapper.prop('clotheType')).toEqual('BlazerShirt');
        });

        it('should have NoHair for `N/A`', () => {
            wrapper.setProps({ gender: 'n/a' });
            expect(wrapper.prop('clotheType')).toEqual('Overall');
        });

        it('should have BlazerShirt for `none`', () => {
            wrapper.setProps({ gender: 'none' });
            expect(wrapper.prop('clotheType')).toEqual('Overall');
        });

        it('should have NoHair for `hermaphrodite`', () => {
            wrapper.setProps({ gender: 'hermaphrodite' });
            expect(wrapper.prop('clotheType')).toEqual('Hoodie');
        });
    });

    describe('skinColor', () => {
        it('should have Light for `light`', () => {
            wrapper.setProps({ skinColor: 'light' });
            expect(wrapper.prop('skinColor')).toEqual('Light');
        });

        it('should have Yellow for `gold`', () => {
            wrapper.setProps({ skinColor: 'gold' });
            expect(wrapper.prop('skinColor')).toEqual('Yellow');
        });

        it('should have Pale for `white`', () => {
            wrapper.setProps({ skinColor: 'white' });
            expect(wrapper.prop('skinColor')).toEqual('Pale');
        });

        it('should have Tanned for `fair`', () => {
            wrapper.setProps({ skinColor: 'fair' });
            expect(wrapper.prop('skinColor')).toEqual('Tanned');
        });

        it('should have Tanned for `white, blue`', () => {
            wrapper.setProps({ skinColor: 'white, blue' });
            expect(wrapper.prop('skinColor')).toEqual('Tanned');
        });

        it('should have Tanned for `white, red`', () => {
            wrapper.setProps({ skinColor: 'white, red' });
            expect(wrapper.prop('skinColor')).toEqual('Tanned');
        });

        it('should have None for `unknown`', () => {
            wrapper.setProps({ skinColor: 'unknown' });
            expect(wrapper.prop('skinColor')).toEqual('None');
        });

        it('should have Pale for `green`', () => {
            wrapper.setProps({ skinColor: 'green' });
            expect(wrapper.prop('skinColor')).toEqual('Pale');
        });

        it('should have Pale for `pale`', () => {
            wrapper.setProps({ skinColor: 'pale' });
            expect(wrapper.prop('skinColor')).toEqual('Pale');
        });

        it('should have Black for `dark`', () => {
            wrapper.setProps({ skinColor: 'dark' });
            expect(wrapper.prop('skinColor')).toEqual('Black');
        });

        it('should have Brown for `brown`', () => {
            wrapper.setProps({ skinColor: 'brown' });
            expect(wrapper.prop('skinColor')).toEqual('Brown');
        });

        it('should have Yellow for `orange`', () => {
            wrapper.setProps({ skinColor: 'orange' });
            expect(wrapper.prop('skinColor')).toEqual('Yellow');
        });

        it('should have Yellow for `yellow`', () => {
            wrapper.setProps({ skinColor: 'yellow' });
            expect(wrapper.prop('skinColor')).toEqual('Yellow');
        });
    });
});
