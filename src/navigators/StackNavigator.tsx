import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import BrowseScreen from "../screens/BrowseScreen";
import { ScreenEnum } from "../enums/screen.enum";
import { themeColors } from "../theme/themeColors";
import LectureScreen from "../screens/LectureScreen";
import SearchScreen from "../screens/SearchScreen";
import CategoryScreen from "../screens/CategoryScreen";
import InstructorScreen from "../screens/InstructorScreen";
import LoginScreen from "../screens/LoginScreen";
import LogoutScreen from "../screens/LogoutScreen";
import TopicScreen from "../screens/TopicScreen";
import WatchScreen from "../screens/WatchScreen";
import { IRootStackParamList } from "../interfaces/rootStackParamList.type";
import HeaderSearchButton from "../components/buttons/HeaderSearchButton";

const Stack = createNativeStackNavigator<IRootStackParamList>();

const StackNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenEnum.Browse}
        screenOptions={({ route }) => ({
          headerTintColor: themeColors.red,
          headerStyle: { backgroundColor: themeColors.black },
          contentStyle: {
            backgroundColor: themeColors.black,
          },
          headerTitle: route.name === ScreenEnum.Browse ? "YDL" : "",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () =>
            route.name !== ScreenEnum.Search && <HeaderSearchButton />,
        })}
      >
        <Stack.Screen name={ScreenEnum.Browse} component={BrowseScreen} />
        <Stack.Screen name={ScreenEnum.Lecture} component={LectureScreen} />
        <Stack.Screen name={ScreenEnum.Search} component={SearchScreen} />
        <Stack.Screen name={ScreenEnum.Category} component={CategoryScreen} />
        <Stack.Screen name={ScreenEnum.Topic} component={TopicScreen} />
        <Stack.Screen
          name={ScreenEnum.Instructor}
          component={InstructorScreen}
        />
        <Stack.Screen name={ScreenEnum.Watch} component={WatchScreen} />
        <Stack.Screen name={ScreenEnum.Login} component={LoginScreen} />
        <Stack.Screen name={ScreenEnum.Logout} component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
