import React from "react";
import { Image } from "react-native";
import { colors } from "../../constants";

export const TabBarComponent = ({ focused, color, size, image }) => {
  return (
    <Image
      source={image ? image : require("../../assets/home.png")}
      resizeMode={"contain"}
      style={{
        width: size,
        height: size,
        tintColor: focused ? colors.appGreen : color,
      }}
    />
  );
};
