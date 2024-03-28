import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "../../Elements/Breadcrumb";

const meta = {
  title: "Example/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const breadcrumb: Story = {
  args: {
    items: [
      { id: "1", name: "iteeeeeem1" },
      { id: "2", name: "item2" },
      { id: "3", name: "item3" },
    ],
  },
};
