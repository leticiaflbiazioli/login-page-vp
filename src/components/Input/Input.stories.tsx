import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Input Text",
    type: "text",
    placeholder: "Input Placeholder",
    value: "",
    onChange: () => {},
  },
};
