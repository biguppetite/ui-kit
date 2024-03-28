import type { Meta, StoryObj } from "@storybook/react";
import SwitchButton from "../../Elements/SwitchButton";

const meta = {
  title: "Example/SwitchButton",
  component: SwitchButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SwitchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const switchButton: Story = {
  args: {
    checked: true,
  },
};
