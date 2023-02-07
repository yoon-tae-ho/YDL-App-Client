export interface ITopic<Lectures = undefined> {
  _id: string;
  name: string;
  index: number;
  lectures: Lectures;
  test: boolean;
  createdAt: Date;
  updatedAt: Date;
}
