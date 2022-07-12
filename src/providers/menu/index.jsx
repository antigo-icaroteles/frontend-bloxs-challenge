import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const handleMenu = () => {
    setMenuIsExpanded(!menuIsExpanded);
  };

  return (
    <MenuContext.Provider value={{ menuIsExpanded, handleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
