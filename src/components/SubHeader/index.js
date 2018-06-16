import React from 'react';

import { View, Image, Text } from 'react-native';

import Button from '../Button';

import styles from './styles';

const SubHeader = () => (
    <View style={styles.container}>
        <Image
            style={styles.avatar}
            source={{ uri: 'https://avatars2.githubusercontent.com/u/14957405?v=4' }}
        />
        
        <View style={styles.profileInfo}>
            <Text style={styles.name}>Carlos Miguel</Text>
            <Text style={styles.bio}>Main of the mains in programmation of layouts with Rocketseat!</Text>

            <View style={styles.buttonContainer}>
                <Button style={styles.firstButton}>Mensagem</Button>
                <Button type="outline">Seguir</Button>
            </View>
        </View>
    </View>
);

export default SubHeader;