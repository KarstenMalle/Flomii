import { NavigationBar } from './NavigationBar';

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  argTypes: {
    width: {
      control: {
        type: 'select',
        options: ['full', 'desktop-large'],
      },
    },
    linkSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    linkLabel: {
      control: 'text',
    },
  },
};

const Template = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'navbar',
  width: 'full',
  linkSize: 'large',
  linkLabel: 'Link',
};

