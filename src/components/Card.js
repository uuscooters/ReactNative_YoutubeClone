import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const Card = () => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Image
                source={{
                    uri:
                        'https://images.unsplash.com/photo-1526859502068-e4cfc3d3fa72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                }}
                style={{
                    width: '100%',
                    height: 200,
                }}
            />
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Icon
                    name="user-circle-o"
                    type="font-awesome"
                    size={30}
                    iconStyle={{ margin: 5 }}
                />
                <View style={{ marginLeft: 10 }}>
                    <Text
                        style={{ fontSize: 20, width: Dimensions.get('screen').width - 50 }}
                        ellipsizeMode="tail"
                        numberOfLines={2}>
                        saya ingin bisa menjadi developer android terbaik amiiin.
          </Text>
                    <Text>Direction</Text>
                </View>
            </View>
        </View>
    );
};

export default Card;
