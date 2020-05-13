import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  NavigationContainer,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import Constants from 'react-native-layout-constants';
import MiniCard from '../components/MiniCard';
import {useSelector, useDispatch} from 'react-redux';

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=react%20native&type=video&key=AIzaSyDjEVEWNGO5atafj6cth0fci5IgTWjSI0A

const SearchScreen = () => {
  const {colors} = useTheme();
  const myColor = colors.iconColor;
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  //this is lokal state const [miniCardData, setMiniCard] = useState([]);
  const dispatch = useDispatch();
  const miniCardData = useSelector(state => {
    return state;
  });
  const [loading, setLoading] = useState(false);
  const fectData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDjEVEWNGO5atafj6cth0fci5IgTWjSI0A`,
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        dispatch({type: 'add', payload: data.items});
        //this is lokal state setMiniCard(data.items);
      });
  };
  return (
    <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>
      <View
        style={{
          padding: 5,
          paddingBottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
          elevation: 5,
          backgroundColor: colors.headerColor,
          alignItems: 'center',
        }}>
        <Icon
          name="md-arrow-back"
          type="ionicon"
          size={28}
          iconStyle={{margin: 5, color: myColor}}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{
            marginHorizontal: 5,
            marginBottom: 3,
            width: '70%',
            height: '80%',
            backgroundColor: '#e6e6e6',
            fontSize: 18,
            fontWeight: '300',
            textAlign: 'justify',
            color: colors.headerColor,
          }}
          value={value}
          onChangeText={text => setValue(text)}
          onSubmitEditing={() => fectData()}
        />
        <Icon
          reverse
          name="md-mic"
          type="ionicon"
          size={15}
          iconStyle={{marginVertical: 10, color: myColor}}
        />
        <Icon
          name="md-options"
          type="ionicon"
          size={25}
          iconStyle={{margin: 10, color: myColor}}
        />
      </View>
      {loading ? (
        <ActivityIndicator style={{marginTop: 10}} size="large" color="red" />
      ) : null}
      <FlatList
        data={miniCardData}
        renderItem={({item}) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={item => item.id.videoId}
      />
    </View>
  );
};

export default SearchScreen;
