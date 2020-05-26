import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import * as Types from '../../constants/index';
const axios = require('axios'); 


const Lesson = ({ route }) => {
    const [lessonState, setLessonState] = useState([]);
    const { lessonId } = route.params;

    const getLesson = () => {
        axios({
            method: "GET",
            url: `${Types.BASE_URL}/lesson/${lessonId}`,
        })
            .then(res => {
                console.log(res.data)
                setLessonState(res.data);
                
            })
            .catch(error => {
                console.log(error);
        })
    }

    useEffect(() => {
        getLesson();
    }, []);
    return (
        <ScrollView>
            <View style={styles.viewCover}>
            <View >
                <View style={styles.headerListItem}>
                        <Text style={styles.headerNameLesson}>{lessonState.name}</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
    );
};

export default Lesson;