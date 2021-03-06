import 'react-native-get-random-values';
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Constants from 'react-native-layout-constants';
import {WebView} from 'react-native-webview';

const VideoPlayer = ({route}) => {
  const {videoId, title} = route.params;
  return (
    <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
      <View style={{width: '100%', height: 200}}>
        <WebView
          javaScriptEnable={true}
          domStorageEnable={true}
          source={{uri: `http://www.youtube.com/embed/${videoId}`}}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get('screen').width - 50,
          margin: 9,
        }}
        numberOfLines={2}
        ellipsizeMode="tail">
        {`${title}`.replace(/&quot;/g, '"')}
      </Text>
      <View style={{borderBottomWidth: 1}} />
    </View>
  );
};

export default VideoPlayer;
