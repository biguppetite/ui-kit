import type { Meta, StoryObj } from "@storybook/react";
import Header, { HeaderLevel } from "../Elements/Header";

const meta = {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
export const header: Story = {
  args: {
    level: HeaderLevel.h1,
    text: "Why do we use it?"
  },
};
