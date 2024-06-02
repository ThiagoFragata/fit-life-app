export interface UserResponse {
  user: User;
}

export interface User {
  id: number;
  photo: any;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  updatedAt: any;
}
