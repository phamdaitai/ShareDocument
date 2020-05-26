import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Item = ({ category }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.photo} source={{ uri: `${category.image}` }} />
            <Text style={styles.title}>{category.name}</Text>
        </View>
    );
};

export default Item;