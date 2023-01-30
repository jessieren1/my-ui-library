export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import "../src/styles/index.scss";

// Globally in your .storybook/preview.js.
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);
