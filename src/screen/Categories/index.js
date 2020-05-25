import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
const axios = require('axios');
import * as Types from '../../constants/index';

const Categories = ({ route }) => {

    const { item } = (route.params != undefined) ? route.params : i;

    const getAllLessonOfSubject = () => {
        axios({
            method: "GET",
            url: `${Types.BASE_URL}/subject/${item._id}`,
        })
            .then(res => {
                // console.log(res.data)
                
            })
            .catch(error => {
                console.log(error);
        })
    }

    useEffect(() => {
        getAllLessonOfSubject();
    }, []);

    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    );
};

export default Categories;