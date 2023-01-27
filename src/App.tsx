import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";

const App: React.FC = () => {
  return (
    <div>
      {/* <Icon icon="code" theme="primary" size="5x"></Icon> */}
      <Menu
        defaultIndex="0"
        onSelect={(index) => {
          alert(index);
        }}
        mode={"vertical"}
        defaultOpenSubMenus={["3"]}
      >
        <MenuItem>link1</MenuItem>

        <MenuItem disabled>link2</MenuItem>

        <MenuItem>link3</MenuItem>

        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
          <MenuItem>dropdown3</MenuItem>
        </SubMenu>
      </Menu>

      <Button
        className="test"
        onClick={(e) => {
          e.preventDefault();
          alert("test test");
        }}
      >
        {" "}
        Default Button
      </Button>
      <Button disabled> Disabled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Primary & Large
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Danger & Small
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="http://www.google.com.au"
        target="_blank"
      >
        link
      </Button>

      <Button
        size={ButtonSize.Large}
        btnType={ButtonType.Link}
        href="http://www.google.com.au"
        disabled
      >
        disabled link
      </Button>
    </div>
  );
};

export default App;
