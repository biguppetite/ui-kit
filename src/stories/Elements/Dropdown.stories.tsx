import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../../Elements/Dropdown";

const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // label: { control: "string" },
  },
  //   args: { label: "button label" },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;
export const basic: Story = {
  args: {
    label: "Dropdown",
    value: "",
    items: [
      "United States",
      "Canada",
      "France",
      "Brazil",
      "China",
      "India",
      "Australia",
      "Japan",
      "Germany",
      "South Africa",
    ],
  },
};
