import React, { FC, useState, createContext } from "react";
import classNames from "classnames";

export type MenuMode = "horizontal" | "vertical";
export type SelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  disabled?: boolean;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  children?: React.ReactNode;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const classes = classNames("test-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  const handleSelect = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContent: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleSelect,
  };

  return (
    <ul className={classes} style={style} data-testId="test-menu">
      <MenuContext.Provider value={passedContent}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
