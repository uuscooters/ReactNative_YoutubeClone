import React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {useSelector} from 'react-redux';

const LittleCard = ({name}) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: 50,
        width: 180,
        borderRadius: 4,
        marginTop: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 22,
          marginTop: 5,
        }}>
        {name}
      </Text>
    </View>
  );
};

const Explore = () => {
  const cardData = useSelector(state => {
    return state;
  });
  return (
    <View style={{flex: 1}}>
      <Header />
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <LittleCard name="Gaming" />
          <LittleCard name="News" />
          <LittleCard name="Entertainment" />
          <LittleCard name="Sport" />
          <LittleCard name="Music" />
          <LittleCard name="Film" />
        </View>
        <Text style={{margin: 10, fontSize: 22, borderBottomWidth: 2}}>
          Trending Videos
        </Text>
        <FlatList
          data={cardData}
          renderItem={({item}) => {
            return (
              <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={item => item.id.videoId}
        />
      </SafeAreaView>
    </View>
  );
};

export default Explore;