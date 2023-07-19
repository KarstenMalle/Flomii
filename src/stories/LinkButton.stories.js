import { LinkButton } from "./LinkButton";

export default {
  title: "Example/LinkButton",
  component: LinkButton,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["default", "neutral"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
    },
  },
};

const Template = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  size: "medium",
  label: "Button",
  disabled: false,
  leftIcon: true,
  rightIcon: true,
};

export const Neutral = Template.bind({});
Neutral.args = {
  type: "neutral",
  size: "medium",
  label: "Button",
  disabled: false,
  leftIcon: true,
  rightIcon: true,
};

// add other button types and variations similarly
