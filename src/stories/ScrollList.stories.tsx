import type { Meta, StoryObj } from "@storybook/react";
import ScrollList from "../Elements/ScrollList";
import React from "react";

const meta = {
  title: "Example/ScrollList",
  component: ScrollList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ScrollList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const scrollList: Story = {
  args: {
    list: [
      <div className="w-40 flex items-center justify-center bg-red-500 mr-3">
        arg1
      </div>,
      <div className="w-40 flex items-center justify-center bg-red-500 mr-3">
        arg2
      </div>,
      <div className="w-40 flex items-center justify-center bg-red-500 mr-3">
        arg3
      </div>,
      <div className="w-40 flex items-center justify-center bg-red-500 mr-3">
        arg4
      </div>,
      <div className="w-40 flex items-center justify-center bg-red-500 mr-3">
        arg5
      </div>,
      <div className="w-40 flex items-center justify-center bg-red-500 mr-3">
        arg6
      </div>,
      <div className="w-40 flex items-center justify-center bg-red-500 mr-3">
        arg7
      </div>,
    ],
    containerClassName: "max-w-3xl",
  },
};
