import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "native-base";
import { FC } from "react";
import { themeColors } from "../../theme/themeColors";
import { GestureResponderEvent } from "react-native";
import { InterfacePressableProps } from "native-base/lib/typescript/components/primitives/Pressable/types";

interface IProps extends InterfacePressableProps {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color?: string;
}

const IonIconsButton: FC<IProps> = ({
  name,
  size,
  color,
  ...props
}: IProps) => {
  return (
    <Pressable {...props}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IonIconsButton;
