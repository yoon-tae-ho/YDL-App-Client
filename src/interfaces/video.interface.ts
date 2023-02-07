export interface IVideo<Lecture = string> {
  _id: string;
  belongIn: Lecture;
  videoIndex: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  player: string;
  videoLink: string;
  embededCode?: string;
  videoSrc?: string;
  videoType?: string;
  trackSrc?: string;
  trackKind?: string;
  trackSrclang?: string;
  test: string;
  createdAt: Date;
  updatedAt: Date;
}
