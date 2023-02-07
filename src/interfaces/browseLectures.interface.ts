import { ILecture } from "./lecture.interface";
import { ITopic } from "./topic.interface";

export type IsContainedArr = {
  [key: number]: boolean;
};

export interface IBrowseLectureTopicDTO extends ITopic<ILecture<ITopic>[]> {}
