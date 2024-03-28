import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../Elements/Checkbox";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "string" },
  },
  args: { label: "button label" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Checked: Story = {
  args: {
    label: "Button",
    name: "checkbox"
  },
};
