import { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { useSetRecoilState } from "recoil";
import { numOfItemInWidthAtom } from "../atoms/numOfItemInWidth.atom";

export const useNumOfItemInWidth = () => {
  const { width } = useWindowDimensions();
  const setNumOfItemInWidth = useSetRecoilState(numOfItemInWidthAtom);

  useEffect(() => {
    let result = 0;

    if (width < 500) result = 2;
    else if (width < 800) result = 3;
    else if (width < 1100) result = 4;
    else if (width < 1400) result = 5;
    else result = 6;

    setNumOfItemInWidth(result);
  }, [width]);
};
