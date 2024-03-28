import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../../Components/Avatar";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const avatar: Story = {
  args: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QSTiahdKODtBSzMaIxXzFqzQCzLpBPqevQ&usqp=CAU",
    description: "4 Dec 2023",
    name: "Meghan",
  },
};

export const squareAvatar: Story = {
  args: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QSTiahdKODtBSzMaIxXzFqzQCzLpBPqevQ&usqp=CAU",
    description: "4 Dec 2023",
    name: "Meghan",
    square: true,
  },
};
