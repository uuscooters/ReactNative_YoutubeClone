import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation, useTheme} from '@react-navigation/native';

const Card = props => {
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
      <View style={{marginBottom: 10}}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: '100%',
            height: 200,
          }}
        />
        <View style={{flexDirection: 'row', margin: 5}}>
          <Icon
            name="user-circle-o"
            type="font-awesome"
            size={30}
            iconStyle={{margin: 5, color: textColors}}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: 20,
                width: Dimensions.get('screen').width - 50,
                color: textColors,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {`${props.title}`.replace(/&quot;/g, '"')}
            </Text>
            <Text style={{color: textColors}}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
