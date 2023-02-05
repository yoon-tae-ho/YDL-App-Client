import { FC } from "react";
import IonIconsButton from "./IoniconsButton";
import { themeColors } from "../../theme/themeColors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IRootStackParamList } from "../../interfaces/rootStackParamList.type";
import { ScreenEnum } from "../../enums/screen.enum";
import { useNavigation } from "@react-navigation/native";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  Exclude<ScreenEnum, ScreenEnum.Search>,
  "headerSearchButton"
>;

const HeaderSearchButton: FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <IonIconsButton
      name="search"
      size={24}
      color={themeColors.white}
      onPress={() => navigation.push(ScreenEnum.Search)}
    />
  );
};

export default HeaderSearchButton;
