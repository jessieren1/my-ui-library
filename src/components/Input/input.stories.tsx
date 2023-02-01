import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "./input";

export default {
  title: "Input Component",
  parameters: {
    info: {
      text: `
         xxxxxx
          `,
      inline: true,
    },
  },
  component: Input,
} as ComponentMeta<typeof Input>;

const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      defaultValue={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export const defaultInput: ComponentStory<typeof Input> = () => (
  <>
    <Input
      style={{ width: "300px" }}
      placeholder="placeholder"
      onChange={action("changed")}
    />
    <ControlledInput />
  </>
);
export const inputWithDisabled: ComponentStory<typeof Input> = () => (
  <Input style={{ width: "300px" }} placeholder="disabled input" disabled />
);

export const inputWithIcon: ComponentStory<typeof Input> = () => (
  <Input
    style={{ width: "300px" }}
    placeholder="input with icon"
    icon="search"
  />
);

export const inputWithSize: ComponentStory<typeof Input> = () => (
  <>
    <Input style={{ width: "300px" }} defaultValue="large size" size="lg" />
    <Input style={{ width: "300px" }} placeholder="small size" size="sm" />
  </>
);

export const inputWithPad: ComponentStory<typeof Input> = () => (
  <>
    <Input
      style={{ width: "300px" }}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input style={{ width: "300px" }} defaultValue="google" append=".com" />
  </>
);
