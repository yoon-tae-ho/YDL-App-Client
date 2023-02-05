import { FC } from "react";
import { useNumOfItemInWidth } from "./hooks/useNumOfItemInWidth";
import { StatusBar } from "expo-status-bar";
import StackNavigator from "./navigators/StackNavigator";
import { View } from "react-native";

const Init: FC = () => {
  useNumOfItemInWidth();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <StackNavigator />
    </View>
  );
};

export default Init;
