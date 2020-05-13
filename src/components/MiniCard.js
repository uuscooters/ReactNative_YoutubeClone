import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation, useTheme} from '@react-navigation/native';

const MiniCard = props => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const textColors = colors.iconColor;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoPlayer', {
          videoId: props.videoId,
          title: props.title,
        })
      }>
      <View style={{flexDirection: 'row', margin: 10, marginBottom: 0}}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: '43%',
            height: 100,
          }}
        />
        <View style={{paddingLeft: 10}}>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <Text
              style={{
                fontSize: 18,
                width: Dimensions.get('screen').width / 2,
                color: textColors,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {`${props.title}`.replace(/&quot;/g, '"')}
            </Text>
            <Icon
              name="options-vertical"
              type="simple-line-icon"
              size={12}
              iconStyle={{
                marginVertical: 7,
              }}
            />
          </View>
          <Text style={{fontSize: 15, color: textColors}}>{props.channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;
