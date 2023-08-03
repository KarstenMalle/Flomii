import { IconButton } from "./IconButton";
import { ReactComponent as PlusIcon } from "./assets/icons/PlusIcon.svg";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "ghost", "danger"],
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

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  disabled: false,
  notification: false,
  icon: PlusIcon,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  disabled: false,
  notification: false,
  icon: PlusIcon,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: "tertiary",
  disabled: false,
  notification: false,
  icon: PlusIcon,
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: "ghost",
  disabled: false,
  notification: false,
  icon: PlusIcon,
};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  disabled: false,
  notification: false,
  icon: PlusIcon,
};

// add other button types and variations similarly
