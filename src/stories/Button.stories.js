import { Button } from './Button';
import Icon from './assets/icons/Icon.png'; // adjust this path as necessary

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'],
      },
    },
    withIcon: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    label: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
  disabled: false,
  withIcon: false,
  iconSrc: Icon,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
  disabled: false,
  withIcon: false,
  iconSrc: Icon,
};

// add other button types and variations similarly
