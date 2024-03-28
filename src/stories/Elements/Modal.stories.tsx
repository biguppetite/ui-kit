import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../../Elements/Modal";
import React from "react";

const meta = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;
export const simpleInput: Story = {
  args: {
    visible: true,
    hide: () => {},
    children: <div> modal</div>
  },
};
