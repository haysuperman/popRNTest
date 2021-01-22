/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import IndexList from './popmodules/indexList';
import EXProduct from './popmodules/productDetail/exproduct';
import EXProductList from './popmodules/productList/exproductlist';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function EXProductFunc({route, navigation}) {
  const {sin} = route.params;
  return <EXProduct sin={sin} />;
}

function EXProductListFunc() {
  const navigation = useNavigation();
  return <EXProductList navigation={navigation} />;
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexList">
        <Stack.Screen
          name="IndexList"
          component={IndexList}
          options={{title: 'indexList'}}
        />
        <Stack.Screen
          name="EXProduct"
          component={EXProductFunc}
          options={{title: 'Product Detail'}}
        />
        <Stack.Screen
          name="EXProductList"
          component={EXProductListFunc}
          options={{title: 'Product List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => App);
