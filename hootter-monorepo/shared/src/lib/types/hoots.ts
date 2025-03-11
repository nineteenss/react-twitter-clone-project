export interface IHoot {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
  likes: number;
  rehoots: number;
  comments: number;
}

export interface IHootterFeedProps {
  data: IHoot[];
}
