import type { Meta, StoryObj } from "@storybook/react";
import Rating from "../Elements/Rating";
import React from "react";

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

const className =
  "border bg-cremeLight border-creme bg-blue-600 w-40 h-40 border-slate-600 ";

export const rating: Story = {
  args: {
    maxRate: 5,
    rate: 3,
  },
};
