import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
