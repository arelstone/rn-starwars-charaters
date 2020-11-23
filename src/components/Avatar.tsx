import React, { FC } from 'react';
import { Avatar as Avataaars } from 'react-native-avataaars';
import { Gender } from '../SwApi';

interface AvatarProps {
    gender: Gender;
    hairColor: string;
    skinColor: string;
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
    'n/a': 'NoHair',
    'none': 'NoHair',
    'auburn, grey': 'Platinum',
    'auburn, white': 'PastelPink',
    'brown, grey': 'BlondeGolden',
};

const skinColors = {
    'light': 'Light',
    'gold': 'Yellow',
    'white': 'Pale',
    'fair': 'Tanned',
    'white, blue': 'Tanned',
    'white, red': 'Tanned',
    'unknown': 'None',
    'green': 'Pale',
    'pale': 'Pale',
    'dark': 'Black',
    'brown': 'Brown',
    'orange': 'Yellow',
    'yellow': 'Yellow',
    'green-tan, brown': '',
    'brown mottle': '',
    'metal': '',
    'grey': '',
    'mottled green': '',
    'grey, red': '',
    'blue, grey': '',
    'blue': '',
    'grey, green, yellow': '',
    'red': 'DarkBrown',
    'grey, blue': '',
    'tan': 'Tanned',
    'fair, green, yellow': '',
    'brown, white': '',
    'silver, red': '',
    'red, blue, white': '',
    'green, grey': '',
};

const clotheTypeForGender = {
    male: 'BlazerShirt',
    female: 'ShirtVNeck',
    'n/a': 'Overall',
    'none': 'Overall',
    hermaphrodite: 'Hoodie',
};

const Avatar: FC<AvatarProps> = ({ gender, hairColor, skinColor }) => {
    // eslint-disable-next-line
    // @ts-expect-error
    const SkinColor = skinColors[skinColor] || '';
    const ClotheType = clotheTypeForGender[gender] || '';
    // eslint-disable-next-line
    // @ts-expect-error 
    const HairColor = hairColors[hairColor] || '';

    return <Avataaars
        topType={topTypes[gender]}
        size={AVATAR_SIZE}
        avatarStyle="Circle"
        accessoriesType="Blank"
        facialHairType={gender === 'male' ? 'MoustacheFancy' : 'Blank'}
        eyeType="Happy"
        eyebrowType="Default"
        mouthType="Default"
        facialHairColor={HairColor}
        hairColor={HairColor}
        clotheType={ClotheType}
        skinColor={SkinColor}
    />;
};

export default Avatar;
