import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../Elements/Accordion";

const meta = {
  title: "Example/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;
export const simpleInput: Story = {
  args: {
    items: [
      { title: "title 1", content: "description" },
      { title: "title 1", content: "description" },
      { title: "title 1", content: "description" },
    ],
    className: "w-80"
  },
};
