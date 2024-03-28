import type { Meta, StoryObj } from "@storybook/react";
import Tab from "../../Elements/Tab";

const meta = {
  title: "Example/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const tab: Story = {
  args: {
    activeId: "1",
    items: [
      { id: "1", name: "iteeeeeem1" },
      { id: "2", name: "item2" },
      { id: "3", name: "item3" },
    ],
    className: "w-[800px]"
  },
};
