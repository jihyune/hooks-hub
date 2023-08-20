import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '~/states/middleware/logger';
import { Wallet } from '~/types';

interface WalletState {
  wallet: Wallet | undefined;
  setWallet: (wallet: Wallet) => void;
  reset: () => void;
}

export const useWalletStore = create<WalletState>()(
  immer(
    logger(set => ({
      name: 'wallet-info-store',
      wallet: undefined,
      setWallet: (wallet: Wallet) =>
        set(state => {
          return { ...state, wallet };
        }),
      reset: () => set({ wallet: undefined }),
    }))
  )
);
