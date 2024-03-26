import type { Meta, StoryObj } from "@storybook/react";
import Input from "../Elements/Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "string" },
  },
  args: { label: "button label" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const simpleInput: Story = {
  args: {
    label: "Button",
  },
};
