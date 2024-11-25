import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from ".";

const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: "Toast Title",
    type: "error",
    message: "Toast Message",
    onClose: () => {},
  },
};
