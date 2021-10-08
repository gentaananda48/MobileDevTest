import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Loading} from './components';
import {persistor, store} from './library/helpers';
import Router from './router';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

const MainApp = () => {
  const loading = useSelector(state => state.user.loading);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      {loading && <Loading />}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
