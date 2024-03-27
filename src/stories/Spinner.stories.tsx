import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "../Elements/Spinner";
import React from "react";

const meta = {
  title: "Example/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;
export const spinner: Story = {
  args: {
    className: "w-10"
  },
};
