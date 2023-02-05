import { atom } from "recoil";

export const numOfItemInWidthAtom = atom<number>({
  key: "numOfItemInWidthAtom",
  default: 0,
});
