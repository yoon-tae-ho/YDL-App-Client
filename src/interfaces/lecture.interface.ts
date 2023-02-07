export interface ILecture<
  Topics = string[],
  Instructors = string[],
  Videos = undefined
> {
  _id: string;
  title: string;
  instructors: Instructors;
  topics: Topics;
  videos: Videos;
  asTaughtIn: string;
  institute: string;
  levels: string[];
  description: string;
  thumbnailUrl: string;
  meta: {
    likes: number;
    hates: number;
  };
  test: Boolean;
  createdAt: Date;
  updatedAt: Date;
}
