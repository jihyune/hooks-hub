import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { data } from '~/data';
import { CreateHook, Hook } from '~/types';

import { logger } from './middleware/logger';

interface HookState {
  hooks: Hook[];
  createHook: (data: CreateHook) => void;
  reset: () => void;
}

export const useHooksStore = create<HookState>()(
  immer(
    logger(set => ({
      name: 'file-store',
      hooks: [...data],
      createHook: (data: CreateHook) =>
        set(state => {
          return { hooks: [{ ...data, likes: 0, id: state.hooks.length + 1 }, ...state.hooks] };
        }),
      reset: () => set({ hooks: [...data] }),
    }))
  )
);
