import type { Meta, StoryObj } from "@storybook/react";
import Button, { buttonType } from "../Elements/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "string" },
  },
  args: { label: "button label" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Checked: Story = {
  args: {
    label: "Button",
    btnType: buttonType.danger
  },
};
