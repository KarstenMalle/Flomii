import { Button } from './Button';
import IconPrimary from './assets/icons/Primary_Icon.svg';
import IconSecondary from './assets/icons/Secondary_Icon.svg';
import IconTertiary from './assets/icons/Tertiary_Icon.svg';
import IconGhost from './assets/icons/Ghost_Icon.svg';
import IconDanger from './assets/icons/Danger_Icon.svg';

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
  iconSrc: IconPrimary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
  disabled: false,
  withIcon: false,
  iconSrc: IconSecondary,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  label: 'Button',
  disabled: false,
  withIcon: false,
  iconSrc: IconTertiary,
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
  label: 'Button',
  disabled: false,
  withIcon: false,
  iconSrc: IconGhost,
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  label: 'Button',
  disabled: false,
  withIcon: false,
  iconSrc: IconDanger,
};

// add other button types and variations similarly
