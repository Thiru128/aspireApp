import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';

export const SpendingLimitScreen = props => {
  const [spentLimit, setSpentLimit] = useState('5,000');

  React.useEffect(() => {
    retrieveSpendingLimit();
  }, [spentLimit]);

  const retrieveSpendingLimit = async () => {
    try {
      const value = await AsyncStorage.getItem('spendingLimit');
      setSpentLimit(previousState =>
        value && value.length ? value : previousState,
      );
    } catch (error) {
      console.log(error);
    }
  };

  const renderLimtData = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSpentLimit(item);
          AsyncStorage.setItem('spendingLimit', item);
        }}>
        <Text
          style={[
            styles.amountText,
            {borderWidth: item == spentLimit ? 0.5 : 0},
          ]}>
          {'S$ ' + item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.arrowContainer}>
              <Image
                resizeMode={'contain'}
                style={styles.arrowIcon}
                source={require('../../assets/arrow.png')}
              />
            </TouchableOpacity>
            <Image
              resizeMode={'contain'}
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />
          </View>
          <Text style={styles.titleText}>Spending Limit</Text>
        </View>
        <View style={styles.bottomContainer}>
          <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
            <View style={{flex: 1, margin: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  resizeMode={'contain'}
                  style={styles.limitIcon}
                  source={require('../../assets/spend_limit1.png')}
                />
                <Text style={styles.limitText}>
                  Set a weekly debit card spending limit
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Text style={styles.dollar}>S$</Text>
                <Text style={styles.availableBalance}>{spentLimit}</Text>
              </View>
              <Text numberOfLines={2} style={styles.limitDesText}>
                Here weekly means the last 7 days - not the calendar week
              </Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={3}
                data={['5,000', '10,000', '15,000']}
                renderItem={({item, index}) => renderLimtData(item, index)}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
