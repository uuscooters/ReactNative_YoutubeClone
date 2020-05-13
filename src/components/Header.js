import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation, useTheme} from '@react-navigation/native';
import Constants from 'react-native-layout-constants';
import {useDispatch, useSelector} from 'react-redux';

export default function Header({}) {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => {
    return state.myDarkMode;
  });
  const myColor = colors.iconColor;

  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        height: 45,
        flexDirection: 'row',
        backgroundColor: colors.headerColor,
        justifyContent: 'space-between',
        elevation: 4,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          iconStyle={{marginLeft: 15}}
          name="youtube-play"
          type="font-awesome"
          size={32}
          color="red"
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            fontWeight: 'bold',
            color: myColor,
          }}>
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 150,
          margin: 5,
          alignItems: 'center',
        }}>
        <Icon name="video" type="foundation" size={30} color={myColor} />
        <Icon
          name="search"
          type="evilicon"
          size={30}
          onPress={() => navigation.navigate('search')}
          color={myColor}
        />
        <Icon
          name="user-circle-o"
          type="font-awesome"
          size={28}
          color={myColor}
          onPress={() =>
            dispatch({type: 'change_theme', payload: !currentTheme})
          }
        />
      </View>
    </View>
  );
}
