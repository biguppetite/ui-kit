import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "../Elements/Textarea";

const meta = {
  title: "Example/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "string" },
  },
  args: { label: "button label" },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;
export const textarea: Story = {
  args: {
    label: "Button",
  },
};
