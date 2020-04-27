import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Constants from 'react-native-layout-constants';
import { Icon } from 'react-native-elements';

const SearchScreen = () => {
    const [value, setValue] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    margin: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    elevation: 5,
                    backgroundColor: 'white',
                }}>
                <Icon name="md-arrow-back" type="ionicon" size={32} />
                <TextInput
                    style={{
                        marginTop: 5,
                        width: '70%',
                        height: '60%',
                        backgroundColor: '#e6e6e6',
                    }}
                    value={value}
                    onChangeText={text => setValue(text)}
                />
                <Icon name="md-send" type="ionicon" size={32} />
            </View>
        </View>
    );
};

export default SearchScreen;
