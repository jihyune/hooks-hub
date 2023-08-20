export * from './apis/users';

export interface Menu {
  name: string;
  path: string;
}

export interface Hook {
  title: string;
  description: string;
  likes: number;
  liked: boolean;
}
