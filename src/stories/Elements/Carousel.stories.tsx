import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../../Elements/Carousel";
import React from "react";

const meta = {
  title: "Example/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const className = 'border bg-cremeLight border-creme bg-blue-600 w-40 h-40 border-slate-600 '

export const carousel: Story = {
  args: {
    items: [
      <div className={className}>el 1</div>,
      <div className={className}>el 2</div>,
      <div className={className}>el 3</div>,
      <div className={className}>el 4</div>,
      <div className={className}>el 5</div>,
      <div className={className}>el 6</div>,
    ],
    containerClassName : 'w-96'
  },
};
