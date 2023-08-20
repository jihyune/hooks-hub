export * from './apis/users';

export interface Menu {
  name: string;
  path: string;
}

export interface Hook {
  id: number;
  title: string;
  description: string;
  likes: number;
  liked: boolean;
}

export interface Wallet {
  classicAddress: string;
  privateKey: string;
  publicKey: string;
  seed?: string;
}
