import { Link } from './Link';

export default {
  title: 'Example/Link',
  component: Link,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  size: 'large',
  label: 'Link',
};


// add other button types and variations similarly
