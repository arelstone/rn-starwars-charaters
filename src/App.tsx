import React, { FC } from 'react';
import AppNavigator from './navgators/AppNavigator';
import { Provider } from 'react-redux';

import { store } from './store';
interface AppProps { }

const App: FC<AppProps> = () => {
    return <Provider {...{ store }}>
        <AppNavigator />
    </Provider>;
};

export default App;
