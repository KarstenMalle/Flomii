import { SearchField } from "./SearchField";

export default {
  title: "Components/SearchField",
  component: SearchField,
  argTypes: {
    stateInput: {
      control: {
        type: "select",
        options: ["disabled", "filled", "focus", "default"],
      },
    },
    hasError: {
      control: "boolean",
    },
    textLabelAbove: { control: "text" },
    textLabelBelow: { control: "text" },
    textLabelError: { control: "text" },
    textPlaceholder: { control: "text" },
  },
};

const Template = (args) => <SearchField {...args} />;

export const Default = Template.bind({});
Default.args = {
  helperText: true,
  label: true,
  stateInput: "default",
  onStateChange: (newState) => console.log(`State changed to ${newState}`),
  hasError: false,
  textLabelAbove: "Search",
  textLabelBelow: "Helper text",
  textLabelError: "Error text",
  textPlaceholder: "Search for ...",
};
