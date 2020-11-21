import { ViewStyle } from 'react-native';

export const BORDER = (borderColor: string = 'red'): ViewStyle => ({
    borderWidth: 1,
    borderColor,
    borderStyle: 'solid',
});
