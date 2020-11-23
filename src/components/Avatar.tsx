import React, { FC } from 'react';
import { Avatar as Avataaars } from 'react-native-avataaars';
import { Gender } from '../SwApi';

interface AvatarProps {
    gender: Gender;
    hairColor: string;
    skinColor: string;
    eyeColor: string;
}

export const AVATAR_SIZE = 300;

const topTypes = {
    male: 'ShortHairShortRound',
    female: 'LongHairStraight',
    'n/a': 'NoHair',
    'none': 'NoHair',
    hermaphrodite: 'LongHairBun',
};

const hairColors = {
    auburn: 'Auburn',
    brown: 'Brown',
    black: 'Black',
    blonde: 'Blonde',
    white: 'SilverGray',
    grey: 'Platinum',
    none: 'NoHair',
    'auburn, grey': 'Platinum',
    'auburn, white': 'PastelPink',
    'brown, grey': 'BlondeGolden',
};

const skinColors = {
    light: 'Light',
    gold: 'Yellow',
    white: 'Pale',
    fair: 'Tanned',
    unknown: 'None',
    green: 'Pale',
    pale: 'Pale',
    dark: 'Black',
    brown: 'Brown',
    orange: 'Yellow',
    yellow: 'Yellow',
};

const clothColors = {
    blue: 'Blue01',
    brown: 'PastelBlue',
    yellow: 'PastelYellow',
    'blue-gray': 'Gray01',
    red: 'Red',
    black: 'Black',
    pink: 'Pink',
    unknown: 'Heather',
    orange: 'PastelOrange',
    hazel: 'Blue03',
    'green, yellow': 'PastelRed',
    'red, blue': 'Blue02',
    gold: 'PastelGreen',
    white: 'White',
};

const Avatar: FC<AvatarProps> = ({ gender, hairColor, skinColor, eyeColor }) => {
    // eslint-disable-next-line
    // @ts-expect-error
    const SkinColor = skinColors[skinColor] || 'Light';
    // eslint-disable-next-line
    // @ts-expect-error 
    const HairColor = hairColors[hairColor] || 'NoHair';
    // eslint-disable-next-line
    // @ts-expect-error 
    const ClotheColor = clothColors[eyeColor] || 'Gray02';

    return <Avataaars
        topType={topTypes[gender]}
        size={AVATAR_SIZE}
        avatarStyle="Transparent"
        accessoriesType="Blank"
        eyeType="Default"
        eyebrowType="Default"
        mouthType="Default"
        hairColor={HairColor}
        clotheType="GraphicShirt"
        clotheColor={ClotheColor}
        skinColor={SkinColor}
    />;
};

export default Avatar;
