import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Avatar from '../Avatar';
import { Gender } from '../../SwApi';

let wrapper: ShallowWrapper;

describe('<Avatar />', () => {
    beforeAll(() => {
        wrapper = shallow(<Avatar
            gender="female"
            hairColor="red"
            skinColor="tanned"
            eyeColor="blue"
        />);
    });


    describe('topType', () => {
        const expectTopType = (gender: Gender, expected: string) => {
            it(`should have correct topType for ${gender}`, () => {
                wrapper.setProps({ gender });
                expect(wrapper.find('Avatar').prop('topType')).toEqual(expected);
            });
        };

        expectTopType('female', 'LongHairStraight');
        expectTopType('male', 'ShortHairShortRound');
        expectTopType('n/a', 'NoHair');
        expectTopType('none', 'NoHair');
        expectTopType('hermaphrodite', 'LongHairBun');
    });

    describe('hairColor', () => {
        const expectHairColor = (hairColor: string, expected: string) => {
            it(`should have correct hairColor for ${hairColor}`, () => {
                wrapper.setProps({ hairColor });
                expect(wrapper.find('Avatar').prop('hairColor')).toEqual(expected);
            });
        };

        it('should default to NoHair', () => {
            wrapper.setProps({ hairColor: 'undefined' });
            expect(wrapper.find('Avatar').prop('hairColor')).toEqual('NoHair');
        });

        expectHairColor('auburn', 'Auburn');
        expectHairColor('brown', 'Brown');
        expectHairColor('black', 'Black');
        expectHairColor('blonde', 'Blonde');
        expectHairColor('white', 'SilverGray');
        expectHairColor('grey', 'Platinum');
        expectHairColor('none', 'NoHair');
        expectHairColor('auburn, grey', 'Platinum');
        expectHairColor('auburn, white', 'PastelPink');
        expectHairColor('brown, grey', 'BlondeGolden');
    });

    describe('skinColor', () => {
        const expectSkinColor = (skinColor: string, expected: string) => {
            it(`should have correct skinColor for ${skinColor}`, () => {
                wrapper.setProps({ skinColor });
                expect(wrapper.find('Avatar').prop('skinColor')).toEqual(expected);
            });
        };

        it('should default to Light', () => {
            wrapper.setProps({ skinColor: 'undefined' });
            expect(wrapper.find('Avatar').prop('skinColor')).toEqual('Light');
        });

        expectSkinColor('light', 'Light');
        expectSkinColor('gold', 'Yellow');
        expectSkinColor('white', 'Pale');
        expectSkinColor('fair', 'Tanned');
        expectSkinColor('unknown', 'None');
        expectSkinColor('green', 'Pale');
        expectSkinColor('pale', 'Pale');
        expectSkinColor('dark', 'Black');
        expectSkinColor('brown', 'Brown');
        expectSkinColor('orange', 'Yellow');
        expectSkinColor('yellow', 'Yellow');
    });

    describe('eyeColor', () => {
        const expectClotheColor = (eyeColor: string, expected: string) => {
            it(`should have correct clotheColor for ${eyeColor}`, () => {
                wrapper.setProps({ eyeColor });
                expect(wrapper.find('Avatar').prop('clotheColor')).toEqual(expected);
            });
        };


        it('should default to Gray02', () => {
            wrapper.setProps({ eyeColor: 'undefined' });
            expect(wrapper.find('Avatar').prop('clotheColor')).toEqual('Gray02');
        });

        expectClotheColor('blue', 'Blue01');
        expectClotheColor('brown', 'PastelBlue');
        expectClotheColor('yellow', 'PastelYellow');
        expectClotheColor('blue-gray', 'Gray01');
        expectClotheColor('red', 'Red');
        expectClotheColor('black', 'Black');
        expectClotheColor('pink', 'Pink');
        expectClotheColor('unknown', 'Heather');
        expectClotheColor('orange', 'PastelOrange');
        expectClotheColor('hazel', 'Blue03');
        expectClotheColor('green, yellow', 'PastelRed');
        expectClotheColor('green, yellow', 'PastelRed');
        expectClotheColor('red, blue', 'Blue02');
        expectClotheColor('gold', 'PastelGreen');
        expectClotheColor('white', 'White');


    });
});
