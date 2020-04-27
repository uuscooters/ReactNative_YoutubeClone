import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'react-native-layout-constants';

export default function Header() {
    return (
        <View
            style={{
                height: 45,
                flexDirection: 'row',
                backgroundColor: 'white',
                justifyContent: 'space-between',
                elevation: 4,
            }}>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Icon
                    iconStyle={{ marginLeft: 15 }}
                    name="youtube-play"
                    type="font-awesome"
                    size={32}
                    color="red"
                />
                <Text style={{ fontSize: 22, marginLeft: 5, fontWeight: 'bold' }}>
                    YouTube
        </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: 150,
                    margin: 8,
                }}>
                <Icon name="video" type="foundation" size={30} />
                <Icon name="search" type="evilicon" size={30} />
                <Icon name="user-circle-o" type="font-awesome" size={28} />
            </View>
        </View>
    );
}
