import { IconButton } from './IconButton';

export default {
  title: 'Example/IconButton',
  component: IconButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  disabled: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  disabled: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  disabled: false,
};

// add other button types and variations similarly
