import React from 'react';

import { View, ScrollView, StatusBar } from 'react-native';

import './config/ReactotronConfig';


import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';

const App = () => (
    <View style={ { flex: 1, backgroundColor: '#F8F8FA' } }>
        <StatusBar
            backgroundColor="#B9B9B9"
            barStyle="light-content"
        />
        <Header />
        <SubHeader />
        <ScrollView>
            <ProductList />
        </ScrollView>
        <Tabs />
    </View>
);

export default console.tron.overlay(App);