export type Posts = Post[];

export interface Post {
  id: number;
  photo: string;
  title: string;
  description: string;
  published: boolean;
  createdAt: string;
  updatedAt: any;
}
