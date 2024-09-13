// atoms/viewAtoms.ts
import { atom } from 'recoil';

export const showSidebarAtom = atom<boolean>({
  key: 'showSidebarAtom',
  default: false,
});
