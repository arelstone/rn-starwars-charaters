import React, { FC } from 'react';
import AppNavigator from './navgators/AppNavigator';

interface AppProps { }

const App: FC<AppProps> = () => {
    return <AppNavigator />;
};

export default App;
