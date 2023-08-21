import { XRPL_Account } from 'xrpl-accountlib';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '~/states/middleware/logger';

interface WalletState {
  wallet: XRPL_Account | undefined;
  setWallet: (wallet: XRPL_Account) => void;
  reset: () => void;
}

export const useWalletStore = create<WalletState>()(
  immer(
    logger(set => ({
      name: 'wallet-info-store',
      wallet: undefined,
      setWallet: (wallet: XRPL_Account) =>
        set(state => {
          return { ...state, wallet };
        }),
      reset: () => set({ wallet: undefined }),
    }))
  )
);
