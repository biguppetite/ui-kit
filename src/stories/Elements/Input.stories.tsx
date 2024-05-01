import type { Meta, StoryObj } from "@storybook/react";
import Input from "../../Elements/Input";
import { EyeIcon } from "@heroicons/react/24/outline";
import React from "react";

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

export const InputIcon: Story = {
  args: {
    label: "Button",
    icon: <EyeIcon className="text-text-dark w-4 mr-1" />
  },
};

export const InputIconRight: Story = {
  args: {
    label: "Button",
    icon: <EyeIcon className="text-text-dark w-4 ml-1" />,
    iconPosition: "right"
  },
};

export const InputError: Story = {
  args: {
    label: "Button",
    icon: <EyeIcon className="text-text-dark w-4 ml-1" />,
    iconPosition: "right",
    errors: ['error']
  },
};

