import React, { Component } from 'react';

import { View } from 'react-native';

import Product from './Product';

import styles from './styles';

export default class ProductList extends Component {
    state = {
        products: [
            {
                id: 1,
                image: 'https://static.digit.in/default/cc5d9ed7c91eeafe70c662eca39aabc532c21e63.jpeg',
                title: 'Xiaomi Mi Mix 2s',
                description: 'Este produto é produto 1',
                price: 'R$ 1579,99',
            },
            {
                id: 2,
                image: 'https://static.digit.in/default/cc5d9ed7c91eeafe70c662eca39aabc532c21e63.jpeg',
                title: 'Produto 1',
                description: 'Este produto é produto 1',
                price: 'R$ 50',
            },
            {
                id: 3,
                image: 'https://static.digit.in/default/cc5d9ed7c91eeafe70c662eca39aabc532c21e63.jpeg',
                title: 'Produto 1',
                description: 'Este produto é produto 1',
                price: 'R$ 50',
            },
            {
                id: 4,
                image: 'https://static.digit.in/default/cc5d9ed7c91eeafe70c662eca39aabc532c21e63.jpeg',
                title: 'Produto 1',
                description: 'Este produto é produto 1',
                price: 'R$ 50',
            },
            {
                id: 5,
                image: 'https://static.digit.in/default/cc5d9ed7c91eeafe70c662eca39aabc532c21e63.jpeg',
                title: 'Produto 1',
                description: 'Este produto é produto 1',
                price: 'R$ 50',
            },
        ]
    };

    render() {
        return(
            <View style={styles.container}>
                {this.state.products.map(product =>
                    <Product key={product.id} product={product} />
                )}
            </View>
        );
    }
}