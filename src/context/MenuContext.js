import React, { useState, createContext } from "react";

export const MenuContext = createContext();

const MenuContextProvider = props => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <MenuContext.Provider
      value={{
        isToggled,
        toggleMenu,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
