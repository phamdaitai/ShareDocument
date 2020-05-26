import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableHighlight, ScrollView, Image } from 'react-native';
const axios = require('axios');
import * as Types from '../../constants/index';
import Item from './item';
import styles from './styles';

const Categories = ({ route, navigation }) => {
    const [lessonState, setLessonState] = useState([]);
    const { item } = (route.params != undefined) ? route.params : i;

    const getAllLessonOfSubject = () => {
        axios({
            method: "GET",
            url: `${Types.BASE_URL}/subject/${item._id}`,
        })
            .then(res => {
                setLessonState(res.data);
                
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
            <View >
                <View style={styles.headerListItem}>
                        <Text style={styles.headerNameSubject}>{item.name}</Text>
                        <View style={styles.headerNumberLesson}>
                            <Image source={require('../../public/image/play.png')}/>
                            <Text> {lessonState.length} bài  học</Text>
                        </View>
            </View>
            <FlatList
                data={lessonState}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <TouchableHighlight
                        underlayColor='rgba(73,182,77,1,0.9)'
                        onPress={() => { navigation.navigate('Lesson', {lessonId: item.id}) }}
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