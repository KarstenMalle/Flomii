import { SearchField } from './SearchField';

export default {
  title: 'Components/SearchField',
  component: SearchField,
  argTypes: {
    state: {
      control: {
        type: 'select',
        options: ['disabled', 'filled', 'focus', 'default'],
      },
    },
    hasError: {
      control: 'boolean',
    },
    textLabelAbove: { control: 'text' }, 
    textLabelBelow: { control: 'text' }, 
    textLabelError: { control: 'text' },
  },
};

const Template = (args) => <SearchField {...args} />;

export const Default = Template.bind({});
Default.args = {
  helperText: true,
  label: true,
  state: 'default',
  hasError: false,
  className: '',
  textLabelAbove: 'Search', 
  textLabelBelow: 'Helper text', 
  textLabelError: 'Error text',
};
