import React, {useState, useEffect} from 'react';
import { View, FlatList, TouchableHighlight } from 'react-native';
const axios = require('axios');
import * as Types from '../../constants/index';
import Item from './item';

const Home = ({ navigation }) => {
    const [subjectState, setSubjectState] = useState('');

    const getSubject = () => {
        axios({
            method: "GET",
            url: `${Types.BASE_URL}/subject`
        })
            .then(res => {
                setSubjectState(res.data);
            })
            .catch(error => {
                console.log(error);
        })
    }

    useEffect(() => {
        getSubject();
    }, []);
    
    return (
        <View>
           <FlatList
                data={subjectState}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <TouchableHighlight
                        underlayColor='rgba(73,182,77,1,0.9)'
                        onPress={() => { navigation.navigate('Categories', {item: item}) }}
                    >
                        <Item
                            category={item}
                        />
                    </TouchableHighlight>}
                keyExtractor={item => item._id}
                numColumns={2}
            />
            </View>
    );
};

export default Home;