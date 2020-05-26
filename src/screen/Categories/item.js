import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Item = ({ lesson }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageLesson} source={require('../../public/image/goal.png')}/>
            <Text style={styles.textNameLesson}>{lesson.name}</Text>
        </View>
    );
};

export default Item;