import { ScreenEnum } from "../enums/screen.enum";

export type IRootStackParamList = {
  [ScreenEnum.Browse]: undefined;
  [ScreenEnum.Lecture]: undefined;
  [ScreenEnum.Search]: undefined;
  [ScreenEnum.Category]: undefined;
  [ScreenEnum.Topic]: undefined;
  [ScreenEnum.Instructor]: undefined;
  [ScreenEnum.Watch]: undefined;
  [ScreenEnum.Login]: undefined;
  [ScreenEnum.Logout]: undefined;
};
