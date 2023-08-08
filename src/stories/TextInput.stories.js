import { TextInput } from "./TextInput";
import { ReactComponent as StartIcon } from "./assets/icons/search-md.svg";
import { ReactComponent as EndIcon } from "./assets/icons/x-close.svg";

export default {
  title: "Components/Fields/TextInput",
  component: TextInput,
  argTypes: {
    stateInput: {
      control: {
        type: "select",
        options: ["disabled", "filled", "focus", "default"],
      },
    },
    labelBool: {
      control: "boolean",
    },
    helperBool: {
      control: "boolean",
    },
    errorBool: {
      control: "boolean",
    },
    label: { control: "text" },
    helper: { control: "text" },
    error: { control: "text" },
    placeholderInput: { control: "text" },
  },
};

const Template = (args) => <TextInput key={Date.now()} {...args} />;


export const Default = Template.bind({});
Default.args = {
  stateInput: "default",
  label: "Label",
  labelBool: true,
  helper: "Helper text",
  helperBool: true,
  error: "Error text",
  errorBool: false,
  placeholderInput: "Placeholder",
  startIcon: StartIcon,
  endIcon: EndIcon,
};
