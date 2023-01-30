import React from "react";
import { action } from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Menu Component",
  parameters: {
    info: {
      text: `
       xxxxx
        `,
      inline: true,
    },
  },
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const defaultMenu: ComponentStory<typeof Menu> = () => (
  <Menu
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>example link 1</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>example link 2</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>dropdown option 1</MenuItem>
      <MenuItem>dropdown option 2</MenuItem>
    </SubMenu>
  </Menu>
);

export const menuWithVertical: ComponentStory<typeof Menu> = () => (
  <Menu
    mode="vertical"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>example link 1</MenuItem>
    <MenuItem>example link 2</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>dropdown option 1</MenuItem>
      <MenuItem>dropdown option 2</MenuItem>
    </SubMenu>
  </Menu>
);

export const menuWithOpened: ComponentStory<typeof Menu> = () => (
  <Menu
    mode="vertical"
    defaultOpenSubMenus={["2"]}
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>example link 1</MenuItem>
    <MenuItem>example link 2</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>dropdown option 1</MenuItem>
      <MenuItem>dropdown option 2</MenuItem>
    </SubMenu>
  </Menu>
);
