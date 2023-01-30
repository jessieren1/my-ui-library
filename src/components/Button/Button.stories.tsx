import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, ButtonSize, ButtonType } from "./button";

export default {
  title: "Button Component",
  parameters: {
    info: {
      text: `
     xxxxxx
      `,
      inline: true,
    },
  },
  component: Button,
} as ComponentMeta<typeof Button>;

export const defaultButton: ComponentStory<typeof Button> = () => (
  <Button onClick={action("clicked")}>Default button</Button>
);

export const buttonWithSize: ComponentStory<typeof Button> = () => (
  <>
    <Button size={ButtonSize.Large}>Large button</Button>
    <Button size={ButtonSize.Small}>Small button</Button>
  </>
);

export const buttonWithType: ComponentStory<typeof Button> = () => (
  <>
    <Button btnType={ButtonType.Primary}>Primary button</Button>
    <Button btnType={ButtonType.Default}>Default Button</Button>
    <Button btnType={ButtonType.Danger}>Danger button</Button>
    <Button btnType={ButtonType.Link} href="https://google.com">
      Link button
    </Button>
  </>
);
