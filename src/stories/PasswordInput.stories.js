import { PasswordInput } from "./PasswordInput";

export default {
  title: "Components/Fields/PasswordInput",
  component: PasswordInput,
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

const Template = (args) => <PasswordInput key={Date.now()} {...args} />;


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
