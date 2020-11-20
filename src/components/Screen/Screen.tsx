import React, { FC, ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

interface ScreenProps extends SafeAreaViewProps {
    children: ReactNode;
}

const Screen: FC<ScreenProps> = ({ children, ...props }) => {
    const style = [styles.container, props.style || {}];

    return <SafeAreaView
        {...props}
        {...{ style }}
    >
        {children}
    </SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
