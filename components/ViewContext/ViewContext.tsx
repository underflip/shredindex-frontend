import React from 'react';

interface LayoutsType {
  [key: string]: React.ComponentType<any>;
}

export interface ViewContextType {
  layouts: LayoutsType;
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext: ViewContextType = {
  layouts: {},
  showSidebar: false,
  setShowSidebar: () => {}, // This is a no-op function as a placeholder
};

const ViewContext = React.createContext<ViewContextType>(defaultContext);

export default ViewContext;
