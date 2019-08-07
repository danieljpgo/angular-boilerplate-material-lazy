export interface User {
  id: number;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
  job: string;
}

export interface Notification {
  id: number;
  user: number;
  type: string;
  text: string;
  visualized: boolean;
  createdAt: string;
}
