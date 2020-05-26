import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableHighlight, ScrollView } from 'react-native';
const axios = require('axios');
import * as Types from '../../constants/index';
import Item from './item';
import styles from './styles';

const Categories = ({ route }) => {
    const [lessonState, setLessonState] = useState([]);
    const { item } = (route.params != undefined) ? route.params : i;

    const getAllLessonOfSubject = () => {
        axios({
            method: "GET",
            url: `${Types.BASE_URL}/subject/${item._id}`,
        })
            .then(res => {
                setLessonState(res.data);
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
        <ScrollView>
        <View style={styles.viewCover}>
            <View>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{lessonState.length} bài  học</Text>
            </View>
            <FlatList
                data={lessonState}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <TouchableHighlight
                        underlayColor='rgba(73,182,77,1,0.9)'
                        // onPress={() => { navigation.navigate('Categories', {item: item}) }}
                    >
                        <Item
                            lesson={item}
                        />
                    </TouchableHighlight>}
                keyExtractor={item => item.id}
                numColumns={1}
            />
            </View>
            </View>
        </ScrollView>
    );
};

export default Categories;