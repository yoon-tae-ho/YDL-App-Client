export interface IInstructor<Lectures = undefined> {
  _id: string;
  name: string;
  lectures: Lectures;
  test: boolean;
  createdAt: Date;
  updatedAt: Date;
}
