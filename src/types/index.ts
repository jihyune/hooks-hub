export * from './apis/users';

export interface Menu {
  name: string;
  path: string;
  isVisible: boolean;
}

export interface Hook {
  id: number;
  title: string;
  description: string;
  file?: File;

  likes: number;
  liked?: boolean;
}

export interface CreateHook {
  title: string;
  description: string;
  file?: File;
}

export interface Wallet {
  classicAddress: string;
  privateKey: string;
  publicKey: string;
  seed?: string;
}
