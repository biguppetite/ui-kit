import type { Meta, StoryObj } from "@storybook/react";
import Rating from "../../Elements/Rating";

const meta = {
  title: "Example/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const rating: Story = {
  args: {
    maxRate: 5,
    rate: 3,
  },
};
