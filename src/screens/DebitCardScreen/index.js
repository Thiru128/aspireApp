import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors, DebitScreenList } from "../../constants";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const DebitCardScreen = (props) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);
  const [availableBalance, setAvailableBalance] = useState("50,000");
  const [spendingLimit, setSpendingLimit] = useState("1,000");
  const [isLimitEnabled, setIsLimitEnabled] = useState(false);
  const [isFreezeCard, setIsFreezeCard] = useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      retrieveSpendingLimit();
    });

    return unsubscribe;
  }, [navigation]);

  const retrieveSpendingLimit = async () => {
    try {
      const value = await AsyncStorage.getItem("spendingLimit");
      setSpendingLimit((previousState) =>
        value && value.length ? value : previousState
      );
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSwitch = (id, value) =>
    id == 1
      ? setIsLimitEnabled((previousState) => !previousState)
      : setIsFreezeCard((previousState) => !previousState);

  const renderLimitDetail = ({ item }) => {
    return (
      <TouchableOpacity
        disabled={!item.route}
        onPress={() => navigation.navigate(item.route)}
        style={styles.limitContainer}
      >
        <View style={styles.limitdetail}>
          <Image
            resizeMode={"contain"}
            style={styles.limitIcon}
            source={item.image}
          />
          <View style={styles.limitDetailContainer}>
            <Text style={styles.limitText}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.limitDesText}>
              {item.id == 2 && isFreezeCard
                ? "Your debit card is currently inactive"
                : item.description + (item.id == 1 ? spendingLimit : "")}
            </Text>
          </View>
        </View>
        {item.showSwitch ? (
          <Switch
            style={{ alignSelf: "flex-end" }}
            trackColor={{ false: "#767577", true: colors.appGreen }}
            thumbColor={"#f4f3f4"}
            onValueChange={(value) => toggleSwitch(item.id, value)}
            value={item.id == 1 ? isLimitEnabled : isFreezeCard}
          />
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Debit Card</Text>
            <Image
              resizeMode={"contain"}
              style={styles.logo}
              source={require("../../assets/logo.png")}
            />
          </View>
          <Text style={styles.cardNumber}>Available Balance</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dollar}>S$</Text>
            <Text style={styles.availableBalance}>{availableBalance}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{ flex: 0.5 }} />
          <ScrollView
            style={{ flex: 0.5 }}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <FlatList
                data={DebitScreenList}
                renderItem={renderLimitDetail}
                keyExtractor={(item) => item.id}
              />
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsVisible((previousState) => !previousState)}
          style={styles.hideContainer}
        >
          <Image
            resizeMode={"contain"}
            style={styles.visible}
            source={require("../../assets/visible.png")}
          />
          <Text style={styles.hideText}>
            {isVisible ? "Hide card number" : "Unhide card number"}
          </Text>
        </TouchableOpacity>
        <View style={styles.cardContainer}>
          <Image
            resizeMode={"contain"}
            style={styles.cardLogo}
            source={require("../../assets/aspire_logo.png")}
          />
          <Text style={styles.nameText}>{"Mark Henry"}</Text>
          <Text style={styles.cardNumber}>
            {isVisible
              ? `5 6 4 7\t3 4 1 1\t2 4 1 3\t2 0 2 0 `
              : `* * * *\t* * * *\t* * * *\ts* * * * `}
          </Text>
          <View style={styles.cardValidContainer}>
            <Text style={styles.cardNumber}>{`Thru: 12/20`}</Text>
            <Text style={styles.cardNumber}>{`CVV: 456`}</Text>
          </View>
          <Image
            resizeMode={"contain"}
            style={styles.cardType}
            source={require("../../assets/visa.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
