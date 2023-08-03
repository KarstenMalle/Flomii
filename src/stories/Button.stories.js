import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "ghost", "danger"],
      },
    },
    withIcon: { control: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"],
      },
    },
    label: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Button",
  disabled: false,
  withIcon: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Button",
  disabled: false,
  withIcon: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: "tertiary",
  label: "Button",
  disabled: false,
  withIcon: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: "ghost",
  label: "Button",
  disabled: false,
  withIcon: false,
};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  label: "Button",
  disabled: false,
  withIcon: false,
};

// add other button types and variations similarly
