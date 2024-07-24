export type PostData = {
  id: number;
  name: string;
  content: string;
  postedBy: string;
  image: string;
  date: Date;
  likeCount: number;
  viewCount: number;
  tags: string[];
}
