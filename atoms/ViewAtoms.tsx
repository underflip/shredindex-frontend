import { atom } from 'recoil';

export interface LayoutsType {
  [key: string]: React.ComponentType<any>;
}

export const layoutsAtom = atom<LayoutsType>({
  key: 'layoutsAtom',
  default: {},
});

export const showSidebarAtom = atom<boolean>({
  key: 'showSidebarAtom',
  default: false,
});
