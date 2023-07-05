import { IconButton } from './IconButton';
import IconPrimary from './assets/icons/Primary_Icon.svg';
import IconSecondary from './assets/icons/Secondary_Icon.svg';
import IconTertiary from './assets/icons/Tertiary_Icon.svg';
import IconGhost from './assets/icons/Ghost_Icon.svg';
import IconDanger from './assets/icons/Danger_Icon.svg';

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
  iconSrc: IconPrimary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  disabled: false,
  iconSrc: IconSecondary,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  disabled: false,
  iconSrc: IconTertiary,
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
  disabled: false,
  iconSrc: IconGhost,
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  disabled: false,
  iconSrc: IconDanger,
};

// add other button types and variations similarly
