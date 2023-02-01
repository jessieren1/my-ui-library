import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "./icon";
import { Button, ButtonSize, ButtonType } from "../Button/button";

export default {
  title: "Icon Component",
  parameters: {
    info: {
      text: `
       xxxxxx
        `,
      inline: true,
    },
  },
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const defaultIcon: ComponentStory<typeof Icon> = () => (
  <>
    <Icon icon="check" size="3x" />
    <Icon icon="anchor" size="3x" />
    <Icon icon="trash" size="3x" />
    <Icon icon="times" size="3x" />
    <Button
      btnType={ButtonType.Primary}
      disabled={false}
      size={ButtonSize.Large}
    >
      <Icon icon="check" />
      check
    </Button>
  </>
);

export const iconWithTheme: ComponentStory<typeof Icon> = () => (
  <>
    <Icon icon="check" size="3x" theme="success" />
    <Icon icon="times" size="3x" theme="danger" />
    <Icon icon="anchor" size="3x" theme="primary" />
    <Icon icon="exclamation-circle" size="3x" theme="warning" />
  </>
);

export const iconWithAction: ComponentStory<typeof Icon> = () => (
  <>
    <Icon icon="spinner" size="3x" spin theme="primary" />
    <Icon icon="spinner" pulse size="3x" theme="success" />
  </>
);
