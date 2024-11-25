import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: "Button Text",
    type: "submit",
    style: "primary",
    onClick: () => {},
  },
};

export const Secondary: Story = {
  args: {
    text: "Button Text",
    type: "button",
    style: "secondary",
    onClick: () => {},
  },
};
